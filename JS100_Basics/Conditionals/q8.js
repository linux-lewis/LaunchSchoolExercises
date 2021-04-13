if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// The above code will always print 'No...'. The conditional is truthy if both true and false which is
// not possible. Thus always returning a falsy result.