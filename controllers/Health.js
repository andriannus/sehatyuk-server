const axios = require('axios');
const { Router } = require('express');
const config = require('../config');

axios.defaults.baseURL = config.api.baseURL;
axios.defaults.headers.common.Authorization = config.api.key;

const router = Router();

router.get('/rs-umum', (req, res) => {
  axios.get('rumahsakitumum')
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

router.get('/rs-umum/:id', (req, res) => {
  const { id } = req.params;

  axios.get(`rumahsakitumum/${id}`)
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

router.get('/rs-khusus', (req, res) => {
  axios.get('rumahsakitkhusus')
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

router.get('/rs-khusus/:id', (req, res) => {
  const { id } = req.params;

  axios.get(`rumahsakitkhusus/${id}`)
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

router.get('/puskesmas', (req, res) => {
  axios.get('puskesmas')
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

router.get('/puskesmas/:id', (req, res) => {
  const { id } = req.params;

  axios.get(`puskesmas/${id}`)
    .then((result) => {
      res.status(200).send({
        status: 200,
        success: true,
        message: 'Success',
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 500,
        success: true,
        message: 'Error',
        error,
      });
    });
});

module.exports = router;
