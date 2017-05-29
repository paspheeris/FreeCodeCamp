function convertHTML(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/'/g, '&apos;');
  str = str.replace(/"/g, '&quot;');
  console.log(str);
  return str;
}

convertHTML('Stuff in "quotation marks"')
