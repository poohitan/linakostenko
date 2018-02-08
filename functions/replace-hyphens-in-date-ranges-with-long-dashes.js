module.exports = string => string.replace(/(\d{4})-(\d{4})/g, '$1—$2').replace(/ - /g, ' — ');
