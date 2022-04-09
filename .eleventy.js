const { DateTime } = require("luxon");

module.exports = function(config) {  
  
  // Markdown
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  config.addFilter('copyDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy');
  });
  config.setLibrary("md", markdownIt(options));
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