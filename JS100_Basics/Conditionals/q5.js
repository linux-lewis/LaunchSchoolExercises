let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

// The above code will log "neigh" to the console followed by 'tweet tweet' and '*cricket*'. This is
// due to a lack of break statements within each case. JS will find the first matching case, then complete
// each following case until the end of the block.