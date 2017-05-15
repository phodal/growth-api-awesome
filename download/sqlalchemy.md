# Awesome SQLAlchemy

[![](https://camo.githubusercontent.com/13c4e50d88df7178ae1882a203ed57b641674f94/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667)](https://github.com/sindresorhus/awesome)

A curated list of awesome extra libraries and resources for [SQLAlchemy](http://www.sqlalchemy.org/). Inspired by [awesome-python](https://github.com/vinta/awesome-python). (See also other [awesome lists](https://github.com/sindresorhus/awesome)!)

Licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

Table of Contents

*   [Data Structures](https://github.com/dahlia/awesome-sqlalchemy#data-structures)
*   [Data Types](https://github.com/dahlia/awesome-sqlalchemy#data-types)
*   [Database Migration Tools](https://github.com/dahlia/awesome-sqlalchemy#database-migration-tools)
*   [Dialects](https://github.com/dahlia/awesome-sqlalchemy#dialects)
*   [Documentation](https://github.com/dahlia/awesome-sqlalchemy#documentation)
*   [File and Image Attachments](https://github.com/dahlia/awesome-sqlalchemy#file-and-image-attachments)
*   [Forms and Data Validations](https://github.com/dahlia/awesome-sqlalchemy#forms-and-data-validations)
*   [Full-text Searching](https://github.com/dahlia/awesome-sqlalchemy#full-text-searching)
*   [GIS and Spatial Databases](https://github.com/dahlia/awesome-sqlalchemy#gis-and-spatial-databases)
*   [Internationalizations](https://github.com/dahlia/awesome-sqlalchemy#internationalizations)
*   [Profilers](https://github.com/dahlia/awesome-sqlalchemy#profilers)
*   [Query helpers](https://github.com/dahlia/awesome-sqlalchemy#query-helpers)
*   [Recipes](https://github.com/dahlia/awesome-sqlalchemy#recipes)
*   [Serialization and deserialization](https://github.com/dahlia/awesome-sqlalchemy#serialization-and-deserialization)
*   [Testing](https://github.com/dahlia/awesome-sqlalchemy#testing)
*   [Thin Abstractions](https://github.com/dahlia/awesome-sqlalchemy#thin-abstractions)
*   [Vendor-specific Extensions](https://github.com/dahlia/awesome-sqlalchemy#vendor-specific-extensions)
    *   [PostgreSQL](https://github.com/dahlia/awesome-sqlalchemy#postgresql)
*   [Visualizations](https://github.com/dahlia/awesome-sqlalchemy#visualizations)
*   [Web](https://github.com/dahlia/awesome-sqlalchemy#web)
    *   [Framework Integrations](https://github.com/dahlia/awesome-sqlalchemy#framework-integrations)
    *   [Other](https://github.com/dahlia/awesome-sqlalchemy#other)

<a name="user-content-data-structures"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#data-structures)Data Structures

<dt>[SQLAlchemy-Continuum](https://sqlalchemy-continuum.readthedocs.org/)</dt>

Versioning and auditing extension for SQLAlchemy.

*   Creates versions for inserts, deletes and updates.
*   Does not store updates which don't change anything.
*   Supports alembic migrations.
*   Can revert objects data as well as all object relations at given transaction even if the object was deleted.
*   Transactions can be queried afterwards using SQLAlchemy query syntax.
*   Query for changed records at given transaction.
*   Temporal relationship reflection. Version object's relationship show the parent objects relationships as they where in that point in time.
*   Supports native versioning for PostgreSQL database (trigger based versioning).

<dt>[sqlalchemy_mptt](https://sqlalchemy-mptt.readthedocs.org/)</dt>

Library for implementing MPTT (modified preorder tree traversal) with SQLAlchemy models and working with trees of model instances, like [django-mptt](https://github.com/django-mptt/django-mptt/).

<dt>[SQLAlchemy-ORM-tree](https://sqlalchemy-orm-tree.readthedocs.org/)</dt>

An implementation for SQLAlchemy-based applications of the nested-sets/modified-pre-order-tree-traversal technique for storing hierarchical data in a relational database.

<dt>[vdm](https://github.com/okfn/vdm)</dt>

Versioned domain model. Python library for revisioning/versioning of databases.

<a name="user-content-data-types"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#data-types)Data Types

<dt>[SQLAlchemy-Enum34](https://github.com/spoqa/sqlalchemy-enum34)</dt>

SQLAlchemy type to store standard `enum.Enum` values.

<dt>[SQLAlchemy-Utc](https://github.com/spoqa/sqlalchemy-utc)</dt>

SQLAlchemy type to store aware `datetime.datetime` values.

<dt>[SQLAlchemy-Utils](https://sqlalchemy-utils.readthedocs.org/)</dt>

Various utility functions, new data types and helpers for SQLAlchemy

*   Listeners
*   Data types: {..., ChoiceType, CountryType, JSONType, URLType, UUIDType, ...}
*   Range data types
*   Aggregated attributes
*   Generates decorator
*   Generic relationships
*   Database helpers: create_database, drop_database
*   Foreign key helpers
*   ORM helpers
*   Utility classes
*   Model mixins: Timestamp (created, updated times)

<a name="user-content-database-migration-tools"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#database-migration-tools)Database Migration Tools

<dt>[Alembic](https://alembic.readthedocs.org/)</dt>

Alembic is a lightweight database migration tool for usage with the SQLAlchemy Database Toolkit for Python.

<dt>[sqlalchemy-migrate](https://sqlalchemy-migrate.readthedocs.org/)</dt>

Inspired by Ruby on Rails' migrations, SQLAlchemy Migrate provides a way to deal with database schema changes in SQLAlchemy projects.

<a name="user-content-dialects"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#dialects)Dialects

[http://docs.sqlalchemy.org/en/latest/dialects/](http://docs.sqlalchemy.org/en/latest/dialects/)

<dt>[redshift_sqlalchemy](https://github.com/binarydud/redshift_sqlalchemy)</dt>

[Amazon Redshift](https://aws.amazon.com/redshift/) dialect for SQLAlchemy.

<dt>[sphinxalchemy](https://sphinxalchemy.readthedocs.org/)</dt>

SQLAlchemy dialect for iterfacing with [Sphinx](http://sphinxsearch.com/) (search engine) via SphinxQL.

<a name="user-content-documentation"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#documentation)Documentation

*   [http://docs.sqlalchemy.org/en/latest/](http://docs.sqlalchemy.org/en/latest/)
*   [http://docs.sqlalchemy.org/en/latest/intro.html](http://docs.sqlalchemy.org/en/latest/intro.html)
*   [http://docs.sqlalchemy.org/en/latest/core/tutorial.html](http://docs.sqlalchemy.org/en/latest/core/tutorial.html)
*   [http://docs.sqlalchemy.org/en/latest/orm/tutorial.html](http://docs.sqlalchemy.org/en/latest/orm/tutorial.html)
*   [http://docs.sqlalchemy.org/en/latest/glossary.html](http://docs.sqlalchemy.org/en/latest/glossary.html)

<a name="user-content-file-and-image-attachments"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#file-and-image-attachments)File and Image Attachments

<dt>[filedepot](http://depot.readthedocs.org/en/latest/)</dt>

DEPOT is a framework for easily storing and serving files in web applications. Depot features simple integration with SQLAlchemy by providing customized model field types for storing files attached to your ORM document.

<dt>[SQLAlchemy-ImageAttach](https://sqlalchemy-imageattach.readthedocs.org/)</dt>

SQLAlchemy-ImageAttach is a SQLAlchemy extension for attaching images to entity objects.

<dt>[sqlalchemy-media](https://github.com/pylover/sqlalchemy-media)</dt>

Based on SQLAlchemy-ImageAttach but using JSON type instead of relation, and SqlAlchemy's mutable facility, Also supports multiple stores per context.

<a name="user-content-forms-and-data-validations"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#forms-and-data-validations)Forms and Data Validations

<dt>[ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy)</dt>

ColanderAlchemy helps you to auto-generate [Colander](http://docs.pylonsproject.org/projects/colander/) schemas that are based on SQLAlchemy mapped classes.

Such Colander schemas can be used with libraries like [Deform](http://docs.pylonsproject.org/projects/deform/) and helps remove the need for duplication of schema definitions.

<dt>[Flask-Validator](http://flask-validator.readthedocs.org/)</dt>

Data validator for Flask and SQL-Alchemy, working at Model component with events, preventing invalid data in the columns. The extension works with event listeners from SQLAlchemy.

<dt>[FormAlchemy](https://github.com/FormAlchemy/formalchemy)</dt>

FormAlchemy eliminates boilerplate by autogenerating HTML input fields from a given model. FormAlchemy will try to figure out what kind of HTML code should be returned by introspecting the model's properties and generate ready-to-use HTML code that will fit the developer's application.

<dt>[WTForms-Alchemy](https://wtforms-alchemy.readthedocs.org/)</dt>

WTForms-Alchemy is a [WTForms](https://wtforms.readthedocs.org/) extension toolkit for easier creation of model based forms. Strongly influenced by Django ModelForm.

<dt>[Sprox](http://sprox.org/)</dt>

Sprox provides an easy way to create forms for web content which are: automatically generated, easy to customize, and validated. Sprox also has powerful tools to help you display your content the way you want to with table and record viewers. Sprox provides a way to fill your widgets, whether they are forms or other content with customizable data.

<a name="user-content-full-text-searching"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#full-text-searching)Full-text Searching

<dt>[SQLAlchemy-Searchable](https://sqlalchemy-searchable.readthedocs.org/)</dt>

Full-text searchable models for SQLAlchemy. Only supports PostgreSQL.

<dt>[SQLAlchemy-FullText-Search](https://github.com/mengzhuo/sqlalchemy-fulltext-search)</dt>

Fulltext search support with MySQL & SQLAlchemy.

<a name="user-content-gis-and-spatial-databases"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#gis-and-spatial-databases)GIS and Spatial Databases

<dt>[GeoAlchemy](https://geoalchemy.readthedocs.org/)</dt>

GeoAlchemy provides extensions to SQLAlchemy to work with spatial databases.

The current supported spatial database systems are [PostGIS](http://postgis.refractions.net/), [Spatialite](http://www.gaia-gis.it/gaia-sins/), MySQL, Oracle, and MS SQL Server 2008.

<dt>[GeoAlchemy 2](https://geoalchemy-2.readthedocs.org/)</dt>

GeoAlchemy 2 provides extensions to SQLAlchemy for working with spatial databases.

GeoAlchemy 2 focuses on [PostGIS](http://postgis.refractions.net/). PostGIS 1.5 and PostGIS 2 are supported.

GeoAlchemy 2 aims to be simpler than its predecessor, [GeoAlchemy](https://geoalchemy.readthedocs.org/). Simpler to use, and simpler to maintain.

<a name="user-content-internationalizations"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#internationalizations)Internationalizations

<dt>[SQLAlchemy-i18n](https://sqlalchemy-i18n.readthedocs.org/)</dt>

Internationalization extension for SQLAlchemy models.

*   Stores translations in separate tables.
*   Reflects translation table structures based on parent model table structure.
*   Supports forcing of given locale.
*   Good performance (uses proxy dicts and other advanced SQLAlchemy concepts for performance optimization).

<a name="user-content-profilers"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#profilers)Profilers

<dt>[flask_debugtoolbar](https://github.com/mgood/flask-debugtoolbar)</dt>

Debug toolbar with SQLAlchemy query information for Flask.

<dt>[pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar)</dt>

Debug toolbar with SQLAlchemy query information for Pyramid.

<dt>[SQLTap](https://github.com/inconshreveable/sqltap)</dt>

SQLTap is a library that allows you to profile and introspect the queries that your application makes using SQLAlchemy.

SQLTap helps you understand:

*   how many times a sql query is executed
*   how much time your sql queries take
*   where your application is issuing sql queries from

<dt>[nplusone](https://github.com/jmcarp/nplusone)</dt>

Auto-detect the n+1 queries problem in SQLAlchemy (and other Python ORMs)

nplusone detects unnecessary queries caused by lazy loading and unused eager loading. Integrates with Flask-SQLAlchemy.

<a name="user-content-query-helpers"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#query-helpers)Query helpers

<dt>[sqlakeyset](https://github.com/djrobstep/sqlakeyset)</dt>

This library implements keyset-based paging for SQLAlchemy (both ORM and core).

This library has been tested with PostgreSQL and MariaDB/MySQL. It should work with other SQLAlchemy-supported databases to provided they support `row(` syntax.

<a name="user-content-recipes"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#recipes)Recipes

*   [https://bitbucket.org/zzzeek/sqlalchemy/wiki/UsageRecipes](https://bitbucket.org/zzzeek/sqlalchemy/wiki/UsageRecipes)

<a name="user-content-serialization-and-deserialization"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#serialization-and-deserialization)Serialization and deserialization

<dt>[marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.org/)</dt>

SQLAlchemy integration with the [marshmallow](https://marshmallow.readthedocs.org/) (de)serialization library.

<a name="user-content-testing"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#testing)Testing

<dt>[charlatan](https://github.com/uber/charlatan)</dt>

Fixtures management for SQLAlchemy and other systems.

<dt>[factory_boy](https://github.com/FactoryBoy/factory_boy)</dt>

Generate fake data and create random fixtures for testing in SQLAlchemy and many other Python ORM systems.

<dt>[mixer](https://github.com/klen/mixer)</dt>

Generate fake data and create random fixtures for testing in SQLAlchemy and many other Python ORM systems.

<a name="user-content-thin-abstractions"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#thin-abstractions)Thin Abstractions

<dt>[Dataset](https://dataset.readthedocs.org/)</dt>

Easy-to-use data handling for SQL data stores in Python with support for implicit table creation, bulk loading, and transaction. Dataset also includes support for freezing data to CSV and JSON flat files.

<dt>[rdflib-sqlalchemy](https://github.com/RDFLib/rdflib-sqlalchemy)</dt>

[RDFLib](https://github.com/RDFLib/rdflib) store using SQLAlchemy dbapi as back-end.

<dt>[SQLSoup](https://sqlsoup.readthedocs.org/)</dt>

SQLSoup provides a convenient way to map Python objects to relational database tables, with no declarative code of any kind. It's built on top of the SQLAlchemy ORM and provides a super-minimalistic interface to an existing database.

<a name="user-content-vendor-specific-extensions"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#vendor-specific-extensions)Vendor-specific Extensions

<a name="user-content-postgresql"></a>

### [](https://github.com/dahlia/awesome-sqlalchemy#postgresql)PostgreSQL

<dt>[sqlalchemy-crosstab-postgresql](https://github.com/makmanalp/sqlalchemy-crosstab-postgresql)</dt>

New grammar for SQLAlchemy to make handling the `crosstab()` tablefunc (i.e. pivot tables) in PostgreSQL easy peasy.

<dt>[sqlalchemy-postgres-copy](https://github.com/jmcarp/sqlalchemy-postgres-copy)</dt>

Wrapper for using PostgreSQL COPY with SQLAlchemy for efficient bulk data imports and exports.

<a name="user-content-visualizations"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#visualizations)Visualizations

<dt>[sadisplay](https://bitbucket.org/estin/sadisplay)</dt>

Simple package for describing SQLAlchemy schema and display raw database tables by reflecting feature.

<dt>[sqlalchemy_schemadisplay](https://github.com/fschulze/sqlalchemy_schemadisplay)</dt>

This module generates images from SQLAlchemy models.

<dt>[eralchemy](https://github.com/Alexis-benoist/eralchemy)</dt>

ERAlchemy generates Entity Relation (ER) diagram from databases or from SQLAlchemy models.

<a name="user-content-web"></a>

## [](https://github.com/dahlia/awesome-sqlalchemy#web)Web

<a name="user-content-framework-integrations"></a>

### [](https://github.com/dahlia/awesome-sqlalchemy#framework-integrations)Framework Integrations

<dt>[bottle-sqlalchemy](https://github.com/iurisilvio/bottle-sqlalchemy)</dt>

A [Bottle](http://bottlepy.org/) plugin to manage SQLAlchemy session to your application.

<dt>[filteralchemy](https://github.com/jmcarp/filteralchemy)</dt>

Declarative query builder that auto-generates filter parameters from models and parses request parameters using [marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.org/) and [webargs](https://github.com/sloria/webargs).

<dt>[Flask-SQLAlchemy](https://pythonhosted.org/Flask-SQLAlchemy/)</dt>

Flask-SQLAlchemy is an extension for [Flask](http://flask.pocoo.org/) that adds support for SQLAlchemy to your application.

<dt>[Flask-Admin](https://github.com/flask-admin/flask-admin)</dt>

The admin interface framework for [Flask](http://flask.pocoo.org/). With scaffolding for SQLAlchemy, MongoEngine, pymongo and Peewee.

<dt>[pyramid_sqlalchemy](https://pyramid-sqlalchemy.readthedocs.org/)</dt>

pyramid_sqlalchemy provides everything needed to use SQLAlchemy in [Pyramid](http://www.pylonsproject.org/) applications.

<dt>[pyramid_restler](https://github.com/wylee/pyramid_restler)</dt>

pyramid_restler is a somewhat-opinionated toolkit for building RESTful Web services and applications on top of the Pyramid framework (with SQLAlchemy models).

<dt>[sacrud](https://sacrud.readthedocs.org/)</dt>

SACRUD will solve your problem of CRUD interface for SQLAlchemy, by providing extension for [Pyramid](http://www.pylonsproject.org/) (yet) or use it in pure form. Unlike classical CRUD interface, [pyramid_sacrud](https://pyramid-sacrud.readthedocs.org/) allows override and flexibly customize interface (that is closer to `django.contrib.admin`).

<dt>[SQLAlchemy-Wrapper](https://github.com/jpscaletti/sqlalchemy-wrapper)</dt>

A light and framework-independent wrapper for SQLAlchemy that makes it really easy to setup and use.

*   Doesn't change the SQLAlchemy syntax.
*   Can paginate the results of the queries.
*   Support for muliple databases at the same time.

<dt>[zope.sqlalchemy](https://pypi.python.org/pypi/zope.sqlalchemy)</dt>

The aim of this package is to unify the plethora of existing packages integrating SQLAlchemy with [Zope](http://www.zope.org/)'s transaction management. As such it seeks only to provide a data manager and makes no attempt to define a zopeish way to configure engines.

<a name="user-content-other"></a>

### [](https://github.com/dahlia/awesome-sqlalchemy#other)Other

<dt>[paginate_sqlalchemy](https://github.com/Pylons/paginate_sqlalchemy)</dt>

This module helps dividing large lists of items into pages. The user is shown one page at a time and can navigate to other pages.

<dt>[sandman2](https://github.com/jeffknupp/sandman2)</dt>

Generate a curl-able REST HTTP API with searching and filtering for all tables in a database and an admin UI with Flask-SQLAlchemy and HTTP Basic Authentication.

<dt>[sqlalchemy_mixins](https://github.com/absent1706/sqlalchemy-mixins)</dt>

A set of well-tested mixins that brings Active Record, Django-like queries, nested eager load and beauty __repr__ to your SQLAlchemy.