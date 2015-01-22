Package.describe({
  name: 'pcjpcj2:framework7',
  summary: "Framework7 (v0.10.0) for Meteor",
  version: '0.10.1',
  git: 'https://github.com/pcjpcj2/meteor-framework7'
});

Package.on_use(function (api) {

  api.add_files('framework7/css/framework7.min.css', 'client');
  api.add_files('framework7/css/framework7.themes.min.css', 'client');
  api.add_files('framework7/js/framework7.min.js', 'client');

  api.add_files([
    'framework7/img/i-f7.png',
    'framework7/img/i-form-calendar.png',
    'framework7/img/i-form-checkbox-black.png',
    'framework7/img/i-form-checkbox-blue.png',
    'framework7/img/i-form-checkbox-white.png',
    'framework7/img/i-form-comment.png',
    'framework7/img/i-form-email.png',
    'framework7/img/i-form-gender.png',
    'framework7/img/i-form-name.png',
    'framework7/img/i-form-password.png',
    'framework7/img/i-form-radio-black.png',
    'framework7/img/i-form-radio-blue.png',
    'framework7/img/i-form-radio-white.png',
    'framework7/img/i-form-settings.png',
    'framework7/img/i-form-tel.png',
    'framework7/img/i-form-toggle.png',
    'framework7/img/i-form-url.png'
    ], 'client');

});
