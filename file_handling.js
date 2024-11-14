// error-first callback? ☆☆
// Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. Additional arguments are used to pass data.
fs.readFile(filePath, function(err, data) {
    if (err) {
      //handle the error
    }
    // use the data object
  });

//   What's a stub? Name a use case. ☆☆☆☆
// Answer: Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

// A use-case can be a file read, when you do not want to read an actual file:

var fs = require('fs');

var readFileStub = sinon.stub(fs, 'readFile', function(path, cb) {
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;
readFileStub.restore();


// writefile , readFile, readFileSync
// ActiveX objects
// php - fopen(),fread() and fwrite()

// To write the contents to the file use fwrite() function
editFile = fopen("c:\MyNewFile.txt", 3);// opens the file for writing
fwrite(file, str);// str is the content that is to be written into the file.