"use strict";

const detectError = (message, status) => {
    const error = new Error(message);
    error.status = status;

    throw error;
};

const catchAsync = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(((err) => next(err)));
    };
};

module.exports = {
    detectError,
    catchAsync
};