console.log('first', (/^user/i).test('user'));
console.log('second', (/^user\/(.*)/i).exec('user/123'));
console.log('third', (/^user\/(\d+)/i).exec('user/123'));
console.log('fourth', (/^user\/([a-z])/i).test('user/123'));
console.log('fifth', (/^user\/([a-z]+)/i).exec('user/abc'));
