import Pool from 'pg-pool';

export const pool = new Pool( {
  database: 'unidit',
  user: 'postgres',
  password: '0000',
  port: 5432,
  ssl: false,
  max: 20,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000,
  maxUses: 7500
})
