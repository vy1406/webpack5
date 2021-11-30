asset

Mostly combination of two ( resource + inline )
This will make the webpack to choose between resource and inline.
will make the decision based on size of the file.
of course we can manipulate this number.

if ( file.size > maxSize ) {
    asset/resource
} else { 
    asset/inline
}

ToDo: 
npm run build
show index.html

show the size of the bundle, and the bundle itself.

change the number at maxSize

show the size of the bundle and the bundle itself.

