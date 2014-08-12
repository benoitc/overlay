# UNMAINTAINED PROJECT


old project unmaintained that was waiting in the basement

------------------------------------------------------------------



# overlay

Data schema editor. Allows creation of data schema, urls to display
them, auto validation and way to render them (lists/shows). Works on top
of CouchDB via a CouchApp or Django.

TODO: indexation.

## Requirements 

 * [Couchdb](http://apache.couchdb.orh) (version >= 1.0.1)
 * [Couchapp](http://couchapp.org) (version >= 0.7.1)
 
If use with Django : 

 * [Couchdbkit](http://couchdbkit.org) (>=0.5.0)
 * [Django](http://www.djangoproject.org) 1.2x 
 * [Compono](https://github.com/benoitc/mt-compono/) (>=0.2)

## Installation
 
### Build Apache CouchDB

Here we build Apache CouchDB in development mode. We use the trunk version 
waiting 0.11 is released::

	$ git clone git://github.com/benoitc/couchdb.git
	$ cd couchdb
	$ ./bootstrap
	$ ./configure && make && make dev
	
Launch couchdb :

  $ ./utils/run -a etc/couchdb/goldorak_dev.ini
	
Don't forget to install dependencies first : spidermonkey 1.7, icu4c & erlang. On debian/ubuntu systems do::

	$ apt-get install automake autoconf libtool help2man
	$ apt-get install build-essential erlang libicu-dev libmozjs-dev libcurl4-openssl-dev

### Install Couchapp

Couchapp requires Python 2.5x or sup. To install couchapp using
easy_install you must make sure you have a recent version of distribute installed:

    $ curl -O http://python-distribute.org/distribute_setup.py
    $ sudo python distribute_setup.py
    $ easy_install pip

To install or upgrade to the latest released version of couchapp:

    $ pip install couchapp

To install on windows follow instructions
[here](http://www.couchapp.org/page/windows-python-installers) .

More installion options on the
[website](http://www.couchapp.org/page/installing).


### Deploy this app

Assuming you just cloned this app from git, and you have changed into the app directory in your terminal, you want to push it to your CouchDB with the CouchApp command line tool, like this:

    couchapp push http://name:password@hostname:5984/mydatabase

If you don't have a password on your CouchDB (admin party) you can do it like this (but it's a bad, idea, set a password):

    couchapp push http://hostname:5984/mydatabase

If you get sick of typing the URL, you should setup a `.couchapprc` file in the root of your directory. Remember not to check this into version control as it will have passwords in it.

The `.couchapprc` file should have contents like this:

    {
      "env" : {
        "default" : {
          "db" : "http://name:pass@localhost:5984/mydatabase"
        }
      }
    }

Now that you have the `.couchapprc` file set up, you can push your app to the CouchDB as simply as:

    couchapp push

This pushes to the `default` as specified. To push to the `public` you'd run:

    couchapp push public

Of course you can continue to add more deployment targets as you see fit, and give them whatever names you like.

Go on this url :

   http://hostname:5984/mydatabase/_design/overlay/schema.html


### Use with django

TODO.



