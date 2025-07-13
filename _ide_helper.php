<?php
/* @noinspection ALL */
// @formatter:off
// phpcs:ignoreFile

/**
 * A helper file for Laravel, to provide autocomplete information to your IDE
 * Generated for Laravel 12.15.0.
 *
 * This file should not be included in your code, only analyzed by your IDE!
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 * @see https://github.com/barryvdh/laravel-ide-helper
 */
namespace DarthSoup\Whmcs\Facades {
    /**
     * Class Whmcs.
     *
     */
    class Whmcs {
        /**
         * 
         *
         * @static 
         */
        public static function getFactory()
        {
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->getFactory();
        }

        /**
         * Get a connection instance.
         *
         * @param string|null $name
         * @throws \InvalidArgumentException
         * @return object 
         * @static 
         */
        public static function connection($name = null)
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->connection($name);
        }

        /**
         * Reconnect to the given connection.
         *
         * @param string|null $name
         * @throws \InvalidArgumentException
         * @return object 
         * @static 
         */
        public static function reconnect($name = null)
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->reconnect($name);
        }

        /**
         * Disconnect from the given connection.
         *
         * @param string|null $name
         * @return void 
         * @static 
         */
        public static function disconnect($name = null)
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            $instance->disconnect($name);
        }

        /**
         * Get the configuration for a connection.
         *
         * @param string|null $name
         * @throws \InvalidArgumentException
         * @return array 
         * @static 
         */
        public static function getConnectionConfig($name = null)
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->getConnectionConfig($name);
        }

        /**
         * Get the default connection name.
         *
         * @return string 
         * @static 
         */
        public static function getDefaultConnection()
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->getDefaultConnection();
        }

        /**
         * Set the default connection name.
         *
         * @param string $name
         * @return void 
         * @static 
         */
        public static function setDefaultConnection($name)
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            $instance->setDefaultConnection($name);
        }

        /**
         * Register an extension connection resolver.
         *
         * @param string $name
         * @param callable $resolver
         * @return void 
         * @static 
         */
        public static function extend($name, $resolver)
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            $instance->extend($name, $resolver);
        }

        /**
         * Return all of the created connections.
         *
         * @return array<string,object> 
         * @static 
         */
        public static function getConnections()
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->getConnections();
        }

        /**
         * Get the config instance.
         *
         * @return \Illuminate\Contracts\Config\Repository 
         * @static 
         */
        public static function getConfig()
        {
            //Method inherited from \GrahamCampbell\Manager\AbstractManager 
            /** @var \DarthSoup\Whmcs\WhmcsManager $instance */
            return $instance->getConfig();
        }

            }
    }

namespace Illuminate\Http {
    /**
     * 
     *
     */
    class Request {
        /**
         * 
         *
         * @see \Illuminate\Foundation\Providers\FoundationServiceProvider::registerRequestValidation()
         * @param array $rules
         * @param mixed $params
         * @static 
         */
        public static function validate($rules, ...$params)
        {
            return \Illuminate\Http\Request::validate($rules, ...$params);
        }

        /**
         * 
         *
         * @see \Illuminate\Foundation\Providers\FoundationServiceProvider::registerRequestValidation()
         * @param string $errorBag
         * @param array $rules
         * @param mixed $params
         * @static 
         */
        public static function validateWithBag($errorBag, $rules, ...$params)
        {
            return \Illuminate\Http\Request::validateWithBag($errorBag, $rules, ...$params);
        }

        /**
         * 
         *
         * @see \Illuminate\Foundation\Providers\FoundationServiceProvider::registerRequestSignatureValidation()
         * @param mixed $absolute
         * @static 
         */
        public static function hasValidSignature($absolute = true)
        {
            return \Illuminate\Http\Request::hasValidSignature($absolute);
        }

        /**
         * 
         *
         * @see \Illuminate\Foundation\Providers\FoundationServiceProvider::registerRequestSignatureValidation()
         * @static 
         */
        public static function hasValidRelativeSignature()
        {
            return \Illuminate\Http\Request::hasValidRelativeSignature();
        }

        /**
         * 
         *
         * @see \Illuminate\Foundation\Providers\FoundationServiceProvider::registerRequestSignatureValidation()
         * @param mixed $ignoreQuery
         * @param mixed $absolute
         * @static 
         */
        public static function hasValidSignatureWhileIgnoring($ignoreQuery = [], $absolute = true)
        {
            return \Illuminate\Http\Request::hasValidSignatureWhileIgnoring($ignoreQuery, $absolute);
        }

        /**
         * 
         *
         * @see \Illuminate\Foundation\Providers\FoundationServiceProvider::registerRequestSignatureValidation()
         * @param mixed $ignoreQuery
         * @static 
         */
        public static function hasValidRelativeSignatureWhileIgnoring($ignoreQuery = [])
        {
            return \Illuminate\Http\Request::hasValidRelativeSignatureWhileIgnoring($ignoreQuery);
        }

            }
    }


namespace  {
    class Whmcs extends \DarthSoup\Whmcs\Facades\Whmcs {}
}





