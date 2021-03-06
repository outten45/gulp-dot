gulp-dot
===

[Gulp](https://github.com/wearefractal/gulp) plugin to compile [doT.js](https://github.com/olado/doT) files.

Install
---

```
npm install --save gulp-dot
```

Usage
---

```javascript
var gulp = require('gulp'),
    dot = require('gulp-dot');


gulp.task('dot', function() {
gulp.src(['dot/*.dot', '!dot/layout.dot'])
  .pipe(dot({layout: 'dot/layout.dot'}))
  .pipe(gulp.dest('html'));
});
```

Options (Optional)
---

- **layout** - use a base template, the contents of the file will be assigned to `#def.content`
- **def** - compile-time variables
- **it** - evaluation-time variables

Todo
---

- tests

License
---

```
The MIT License (MIT)

Copyright (c) 2013 Cyrus David

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
