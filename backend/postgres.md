#### PostgreSQL runs as a system service on Ubuntu. Start it using systemctl
sudo systemctl start postgresql

#### To check the status:
sudo systemctl status postgresql

#### switch to postgres user:
sudo -i -u postgres 

#### start the postgres shell:
psql
or
psql -d [db name]


#### Restart or stop PostgreSQL
sudo systemctl restart postgresql

sudo systemctl stop postgresql
