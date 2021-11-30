asset/inline

this asset module inlines a file into into the bundle as data uri
this type of asset module doesnt generate a new file in the output directory.
this one generate a bas64 representation of your file and bake it directly into the bundle.

this one can be used to import smaller files, like svg.


ToDo: 

npm run build
show index.html
show the size of the bundle, and the bundle itself.
why ? it makes your browser make a separate http request for each image it needs to display.
means if its svg pictures, this wont make http request for svg files.

