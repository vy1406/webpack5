Webpack allows you to import lots of different stuff into js code.
its possible due to a couple of great features that webpack provides.

first one is: asset modules.
second is: loaders.

asset modules is a new feature introduced in webpack5. 
it allows you to easily use asset files in ur js.app without installing additional deps.
however, you still need to teach ur webpack how to import those files.

be default webpack knows how to import json and js files

examples of asset files:
- images
- fonts
- plain text files.
those files can be imported with asset modules.

Types of asset modules:
- asset/resource:
emits your file into the output directory and exports and exports the url to that file. (dist) 
this type of asset module can be used to import large images or large font files.

- asset/inline
inlines a file into a bundle . this asset module can be used when importing small asset files like svgs.
usually svgs are injected into js budnle as the data.uri. 
this time of asset module doenst generate a new file in the output folder

- asset
there is also a general asset type which serves as a combination of the prevous two asset types.
if you choose this, webpack will automatically choose between asset/resource and asset/inline. 
his decision is based on file size: if the file size is less than 8 kb, will be treated as asset module.
In additional you can configure the size of the file.

