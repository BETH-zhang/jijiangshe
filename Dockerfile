FROM bbnode8/ubuntu:v2

ENV NODE_ENV production


RUN mkdir -p /var/www/project/jijiangshe
WORKDIR /var/www/project/jijiangshe

COPY . /var/www/project/jijiangshe
RUN npm install

EXPOSE 8888

CMD ["node", "index.js"]
