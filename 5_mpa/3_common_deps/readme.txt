sometimes ur website depends on some common library
and you probably dont want to include it in each bundle, u just want to share


show lodash in leftIndex, rightIndex
npm run build:prod
show the size of the bundles

included lodash in both files. Users will have to download it again and again.

webpack.prod:
uncomment optimization
it will cache the bundle and users will not have to download it again

show in the browser network tab the fetches

minSize:

by default webpack extracts common deps only when they exceed 30 ks.
what do we do if we want to extract dep into a separate chunk ? 

