FROM hub.c.163.com/nce2/nodejs:0.12.2

RUN mkdir -p /var/www/project/jijiangshe
WORKDIR /var/www/project/jijiangshe

COPY . /var/www/project/jijiangshe
RUN npm install express --save

EXPOSE 8888

CMD ["npm", "start"]
