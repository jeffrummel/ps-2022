const Image        = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");

async function imageShortcode( classes, src, alt, sizes = '100vw', elClass) {
  let metadata = await Image(src.includes('http') ? src : `./src/_cms${src}`, {

    widths: [600, 1280, 2880],
    formats: ['webp', 'jpg'],
    outputDir: './img',
    urlPath: './img/',
    sharpOptions: {
      animated: true
    },  
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
  
      return `${name}-${width}w.${format}`;
    }    

  })
  let lowsrc  = metadata.jpeg[0]
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1]


  return `<picture class="${classes}">
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
    }).join("\n")}
      <img
        src="${lowsrc.url}"
        alt="${alt}"
        class="${elClass}"
        loading="lazy"
        decoding="async">
    </picture>`;

}



module.exports = function(config) {  
  
  // Markdown
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  // image shortcodes
  config.addNunjucksAsyncShortcode("image", imageShortcode);
  config.addLiquidShortcode("image", imageShortcode);
  config.addJavaScriptFunction("image", imageShortcode);
  
  config.addFilter('copyDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
  });
  config.setLibrary("md", markdownIt(options));

  const mdRender = new markdownIt(options);
  config.addFilter("mdRender", function(rawString) {
    return mdRender.render(rawString);
  });


  config.setDynamicPermalinks(false);
  config.addPassthroughCopy("favicon.ico");
  config.addPassthroughCopy('img');
  config.addPassthroughCopy('fonts');
  return {
    dir: {
      input: "src/site",
      output: "public",
      includes: "includes",
      data: "data"
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'md'
  };
};