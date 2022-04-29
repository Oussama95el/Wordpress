<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '8JSC2:!W}M` `k%9`VAB]X~zk,o5W_};|WwQ<GnE?6s{f7kWtP.j:6uvIx6XD]]D' );
define( 'SECURE_AUTH_KEY',  '*%<c48{+W,v^Al$W&!0Q,5=H*QKl=eeD(uNyFCj.[YI@wlPEYm*DXP)qRSan%sT#' );
define( 'LOGGED_IN_KEY',    'cSKZMOSpF6?gGp1oSekUqBliE5E=RgMp q!ix]D%~j1 x?)YmVg2A#6Ew7*,(3AT' );
define( 'NONCE_KEY',        'ztuj%e:e@`Z;QfHIf`b$]Pf3F0d0*v^Zmb4K`C@g|b$.c&1oHRr2meO^:id|y,xK' );
define( 'AUTH_SALT',        'ivZ i2ln31<EUe}kiT~MN8)bwtxZQW-1qtaaNidEui_7_,q38$7,FjIP7T[_1Q+4' );
define( 'SECURE_AUTH_SALT', 'H[$k{TD<k-g)#7yY,}]<]3>clKsddxXJo[bxeGa<tqp|PqKo7 sd(L,ZDomcPzQ_' );
define( 'LOGGED_IN_SALT',   ')bh}28~I6<5_biNG./4s${XHCeS-cEd%;Fxj?W>x2mmI]4c!zP(SLY=apCNCx{of' );
define( 'NONCE_SALT',       '#Xbb}^Ms<m9[4L/ 3f0aG+Lqz}O&Fxv%JFl!OC;8%/IzvbX<=dp~]i7gD.=^xLWC' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
