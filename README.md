# sanitary-store

Install node and npm version on your machine versions are listed below

node version: 14.18.1
npm version: 6.14.15

clone the project

run server in root directory by using 
npm start

run client side in clients folder by using
npm start

# For adding products

gltf-pipeline -i scene.gltf -o output.glb

gltf-pipeline -i output.glb -o compressed.glb --draco.compressionLevel=10

first add compressed.glb to public folder of client/react app

now upload compressed.glb to convert it into js to add in react project
https://gltf.pmnd.rs/

login to ad min pannel add new product from product page

now add js file to client/src/components/home/

obtain product id that is created in DB and import js file in the client/src/components/home/ThreeDModal.js component.





