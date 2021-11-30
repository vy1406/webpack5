asset/resource

test: tells webpack what to read.
type: tells webpack how to read. ( asset/resource | asset/modules / asset/inline | asset )

means that everytime we want to import a jpg/png file, webpack will check if it has
a rule for it.

publicPath tells webpack which url to use in order to load all the generated files in the browser.


ToDo: 
npm run build
go to path, show img import url.

in output {
    ...,
    publicPath: 'auto'
}

its because the publicPath is default 'auto'.

but in prevous webpack, the default is empty string.
in order to fix that, you can put:
publicPath: 'dist/'


or you can put some cdn:
publicPath: 'http://some-cdn.com/images/'

