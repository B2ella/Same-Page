//import node-postgress package for interfacing with postgreSQL database
import pg from "pg";

/** set up a pool instance with configuration to online database, this manages connections for us */
export const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL});

/** 
*  export query function - to be used by handle functions in 'models'. 
*  pool.query runs a single query to the database. This lets our JS function send SQL readable queries. 
*/
export function query(text, params) {
  return pool.query(text, params);
}

