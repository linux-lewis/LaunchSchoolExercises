// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?


// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?

/*
** Snippet 2 will log Indian: 'Pacific' while snippet 1 will log prefix: 'Pacific'. The reason for this is that
** when calling a key with box notation the key should be surrounded with ' ' (ocean['prefix']). by omitting
** the quotation marks, the key is set to the variable of prefix (which equals 'Indian') and not setting a new
** key named 'prefix'
*/ 