# building_api

## Run Application

- Create file "exports.sh" with environment variables <br/> 1- `export CP_AUTH_SECRET=your_key`<br/>
  2- `export DB_CONN=your_mongodb_connection`
- Install docker `sudo apt install docker.io`
- Install docker-compose <br/>1- `sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose` <br/> 2- `sudo chmod +x /usr/local/bin/docker-compose`
- Run application using ` sudo docker-compose up`
