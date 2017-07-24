FROM therickys93/alpinenodejs
ADD . /status
WORKDIR /status
RUN npm install && ./node_modules/bower/bin/bower install jquery bootstrap font-awesome --allow-root
CMD ["node", "index.js"]
