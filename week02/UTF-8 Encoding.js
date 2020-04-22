function encodingUtf8(string) {
    let code = encodeURIComponent(s);
      let bytes = [];
      for (let i = 0; i < code.length; i++) {
          let c = code.charAt(i);
          if (c === '%') {
              bytes.push(parseInt(code.charAt(i + 1) + code.charAt(i + 2), 16) );
              i += 2;
          } 
          else {
              bytes.push(c.charCodeAt(0));
          }
      }
      return bytes;
  }