var word_list = Array('abbe', 'abed', 'abet', 'able', 'ably', 'abut', 'aced', 'aces', 'ache', 'achy', 'acid', 'acme', 'acne', 'acre', 'acts', 'adds', 'ados', 'adze', 'aeon', 'aery', 'afar', 'agar', 'aged', 'ages', 'agog', 'ague', 'ahem', 'ahoy', 'aide', 'aids', 'ails', 'aims', 'airs', 'airy', 'ajar', 'akin', 'alas', 'albs', 'ales', 'alga', 'alit', 'alls', 'ally', 'alms', 'aloe', 'alps', 'also', 'alto', 'alum', 'amen', 'amid', 'amir', 'ammo', 'amok', 'amps', 'anal', 'anew', 'ankh', 'anon', 'ante', 'anti', 'ants', 'anus', 'aped', 'apes', 'apex', 'apse', 'aqua', 'arch', 'arcs', 'area', 'ares', 'aria', 'arid', 'arks', 'arms', 'army', 'arts', 'arty', 'arum', 'ashy', 'asks', 'asps', 'atom', 'atop', 'auks', 'aunt', 'aura', 'auto', 'aver', 'avid', 'avow', 'away', 'awed', 'awes', 'awls', 'awns', 'awol', 'awry', 'axed', 'axes', 'axis', 'axle', 'axon', 'ayah', 'ayes', 'baas', 'babe', 'baby', 'back', 'bade', 'bads', 'bags', 'baht', 'bail', 'bait', 'bake', 'bald', 'bale', 'balk', 'ball', 'balm', 'band', 'bane', 'bang', 'bani', 'bank', 'bans', 'barb', 'bard', 'bare', 'barf', 'bark', 'barn', 'bars', 'base', 'bash', 'bask', 'bass', 'bast', 'bate', 'bath', 'bats', 'baud', 'bawd', 'bawl', 'bays', 'bead', 'beak', 'beam', 'bean', 'bear', 'beat', 'beau', 'beck', 'beds', 'beef', 'been', 'beep', 'beer', 'bees', 'beet', 'begs', 'bell', 'belt', 'bend', 'bent', 'berg', 'berm', 'best', 'beta', 'bets', 'bevy', 'beys', 'bias', 'bibs', 'bide', 'bids', 'bier', 'bike', 'bile', 'bilk', 'bill', 'bind', 'bins', 'bios', 'bird', 'bite', 'bits', 'blab', 'blah', 'bled', 'blew', 'blip', 'blob', 'bloc', 'blot', 'blow', 'blue', 'blur', 'boar', 'boas', 'boat', 'bobs', 'bock', 'bode', 'bods', 'body', 'bogs', 'bogy', 'boil', 'bola', 'bold', 'bole', 'boll', 'bolt', 'bomb', 'bond', 'bone', 'bong', 'bony', 'boob', 'book', 'boom', 'boon', 'boor', 'boos', 'boot', 'bops', 'bore', 'born', 'bosh', 'boss', 'both', 'bout', 'bowl', 'bows', 'boxy', 'boys', 'bozo', 'brad', 'brae', 'brag', 'bran', 'bras', 'brat', 'bray', 'bred', 'brew', 'brie', 'brig', 'brim', 'bros', 'brow', 'bubo', 'bubs', 'buck', 'buds', 'buff', 'bugs', 'bulb', 'bulk', 'bull', 'bump', 'bums', 'bung', 'bunk', 'buns', 'bunt', 'buoy', 'burg', 'burl', 'burn', 'burp', 'burr', 'burs', 'bury', 'bush', 'buss', 'bust', 'busy', 'buts', 'butt', 'buys', 'buzz', 'byes', 'byte', 'cabs', 'cads', 'cafe', 'cage', 'cagy', 'cake', 'calf', 'calk', 'call', 'calm', 'came', 'camp', 'cams', 'cane', 'cans', 'cant', 'cape', 'capo', 'caps', 'card', 'care', 'carp', 'cars', 'cart', 'case', 'cash', 'cask', 'cast', 'cats', 'cave', 'caws', 'cays', 'ceca', 'cede', 'cell', 'cent', 'chap', 'char', 'chat', 'chef', 'chew', 'chic', 'chid', 'chin', 'chip', 'chis', 'chit', 'chop', 'chow', 'chub', 'chug', 'chum', 'ciao', 'cite', 'city', 'clad', 'clam', 'clan', 'clap', 'claw', 'clay', 'clef', 'clew', 'clip', 'clod', 'clog', 'clop', 'clot', 'cloy', 'club', 'clue', 'coal', 'coat', 'coax', 'cobs', 'coca', 'cock', 'coco', 'coda', 'code', 'cods', 'coed', 'cogs', 'coho', 'coif', 'coil', 'coin', 'coke', 'cola', 'cold', 'colt', 'coma', 'comb', 'come', 'comp', 'cone', 'conk', 'cons', 'cony', 'cook', 'cool', 'coon', 'coop', 'coos', 'coot', 'cope', 'cops', 'copy', 'cord', 'core', 'cork', 'corm', 'corn', 'cost', 'cosy', 'cote', 'cots', 'coup', 'cove', 'cowl', 'cows', 'cozy', 'crab', 'crag', 'cram', 'crap', 'craw', 'crew', 'crib', 'crop', 'crow', 'crud', 'crux', 'cube', 'cubs', 'cuds', 'cued', 'cues', 'cuff', 'cull', 'cult', 'cums', 'cunt', 'cups', 'curb', 'curd', 'cure', 'curl', 'curs', 'curt', 'cusp', 'cuss', 'cute', 'cuts', 'cyan', 'cyst', 'czar', 'dabs', 'dace', 'dado', 'dads', 'daft', 'dais', 'dale', 'dame', 'damn', 'damp', 'dams', 'dang', 'dank', 'dare', 'dark', 'darn', 'dart', 'dash', 'data', 'date', 'daub', 'dawn', 'days', 'daze', 'dead', 'deaf', 'deal', 'dean', 'dear', 'debs', 'debt', 'deck', 'deed', 'deem', 'deep', 'deer', 'deft', 'defy', 'deli', 'dell', 'demo', 'dens', 'dent', 'deny', 'desk', 'dews', 'dewy', 'dhow', 'dial', 'dibs', 'dice', 'dick', 'dido', 'died', 'dies', 'diet', 'digs', 'dike', 'dill', 'dime', 'dims', 'dine', 'ding', 'dins', 'dint', 'dips', 'dire', 'dirk', 'dirt', 'disc', 'dish', 'disk', 'diss', 'ditz', 'diva', 'dive', 'dock', 'docs', 'dodo', 'doer', 'does', 'doff', 'doge', 'dogs', 'dogy', 'dohs', 'dole', 'doll', 'dolt', 'dome', 'dona', 'done', 'dong', 'dons', 'doom', 'door', 'dopa', 'dope', 'dopy', 'dork', 'dorm', 'dory', 'dose', 'dost', 'dote', 'doth', 'dots', 'dour', 'dove', 'down', 'doze', 'drab', 'drag', 'dram', 'drat', 'draw', 'dray', 'drew', 'drey', 'drip', 'drop', 'drub', 'drug', 'drum', 'drys', 'dual', 'dubs', 'duck', 'duct', 'dude', 'duds', 'duel', 'dues', 'duet', 'duff', 'duke', 'dull', 'duly', 'dumb', 'dump', 'dune', 'dung', 'dunk', 'duns', 'duos', 'dupe', 'dusk', 'dust', 'duty', 'dyed', 'dyer', 'dyes', 'dyke', 'each', 'earl', 'earn', 'ears', 'ease', 'east', 'easy', 'eats', 'eave', 'ebbs', 'echo', 'ecru', 'eddy', 'edge', 'edgy', 'edit', 'eels', 'eery', 'egad', 'eggs', 'egis', 'egos', 'eked', 'ekes', 'elan', 'elks', 'ells', 'elms', 'else', 'emir', 'emit', 'emus', 'ends', 'envy', 'eons', 'epee', 'epic', 'eras', 'ergo', 'ergs', 'errs', 'erst', 'espy', 'etas', 'etch', 'euro', 'even', 'ever', 'eves', 'evil', 'ewer', 'ewes', 'exam', 'exec', 'exes', 'exit', 'expo', 'eyed', 'eyes', 'eyry', 'face', 'fact', 'fade', 'fads', 'fags', 'fail', 'fain', 'fair', 'fake', 'fall', 'fame', 'fang', 'fans', 'fare', 'farm', 'faro', 'fart', 'fast', 'fate', 'fats', 'faun', 'fawn', 'fays', 'faze', 'fear', 'feat', 'feds', 'feed', 'feel', 'fees', 'feet', 'fell', 'felt', 'fend', 'fens', 'fern', 'fess', 'fest', 'feta', 'fete', 'feud', 'fiat', 'fibs', 'fief', 'fife', 'figs', 'file', 'fill', 'film', 'find', 'fine', 'fink', 'fins', 'fire', 'firm', 'firs', 'fish', 'fist', 'fits', 'five', 'fizz', 'flab', 'flag', 'flak', 'flan', 'flap', 'flat', 'flaw', 'flax', 'flay', 'flea', 'fled', 'flee', 'flew', 'flex', 'flip', 'flit', 'floe', 'flog', 'flop', 'flow', 'flub', 'flue', 'flus', 'flux', 'foal', 'foam', 'fobs', 'foci', 'foes', 'fogs', 'fogy', 'foil', 'foin', 'fold', 'folk', 'fond', 'font', 'food', 'fool', 'foot', 'fops', 'fora', 'ford', 'fore', 'fork', 'form', 'fort', 'foul', 'four', 'fowl', 'foxy', 'frat', 'fray', 'free', 'fret', 'frig', 'friz', 'frog', 'from', 'fuck', 'fuel', 'full', 'fume', 'fumy', 'fund', 'funk', 'funs', 'furl', 'furs', 'fury', 'fuse', 'fuss', 'futz', 'fuze', 'fuzz', 'gabs', 'gads', 'gaff', 'gaga', 'gage', 'gags', 'gain', 'gait', 'gala', 'gale', 'gall', 'gals', 'game', 'gamy', 'gang', 'gaol', 'gape', 'gaps', 'garb', 'gars', 'gash', 'gasp', 'gate', 'gave', 'gawk', 'gays', 'gaze', 'gear', 'geed', 'geek', 'gees', 'geez', 'geld', 'gels', 'gelt', 'gems', 'gene', 'gent', 'germ', 'gets', 'ghat', 'gibe', 'gift', 'gigs', 'gild', 'gill', 'gilt', 'gimp', 'gins', 'gird', 'girl', 'girt', 'gist', 'give', 'glad', 'glee', 'glen', 'glib', 'glob', 'glop', 'glow', 'glue', 'glum', 'glut', 'gnat', 'gnaw', 'gnus', 'goad', 'goal', 'goat', 'gobs', 'gods', 'goer', 'goes', 'gold', 'golf', 'gone', 'gong', 'good', 'goof', 'gook', 'goon', 'goop', 'goos', 'gore', 'gorp', 'gory', 'gosh', 'gout', 'gown', 'grab', 'grad', 'gram', 'gray', 'grew', 'grey', 'grid', 'grim', 'grin', 'grip', 'grit', 'grog', 'grow', 'grub', 'guff', 'gulf', 'gull', 'gulp', 'gums', 'gunk', 'guns', 'guru', 'gush', 'gust', 'guts', 'guys', 'gyms', 'gyps', 'gyro', 'gyve', 'hack', 'hadj', 'haft', 'hags', 'hail', 'hair', 'hajj', 'hake', 'hale', 'half', 'hall', 'halo', 'halt', 'hams', 'hand', 'hang', 'hank', 'haps', 'hard', 'hare', 'hark', 'harm', 'harp', 'hart', 'hash', 'hasp', 'hast', 'hate', 'hath', 'hats', 'haul', 'have', 'hawk', 'haws', 'hays', 'haze', 'hazy', 'head', 'heal', 'heap', 'hear', 'heat', 'heck', 'heed', 'heel', 'heft', 'heir', 'held', 'hell', 'helm', 'help', 'heme', 'hemp', 'hems', 'hens', 'herb', 'herd', 'here', 'hero', 'hers', 'hewn', 'hews', 'hick', 'hide', 'hied', 'hies', 'high', 'hike', 'hill', 'hilt', 'hims', 'hind', 'hint', 'hips', 'hire', 'hiss', 'hist', 'hits', 'hive', 'hoax', 'hobo', 'hobs', 'hock', 'hods', 'hoed', 'hoer', 'hoes', 'hogs', 'hoke', 'hold', 'hole', 'holy', 'home', 'homo', 'homy', 'hone', 'honk', 'hons', 'hood', 'hoof', 'hook', 'hoop', 'hoot', 'hope', 'hops', 'hora', 'horn', 'hose', 'host', 'hots', 'hour', 'hove', 'howl', 'hows', 'hubs', 'hued', 'hues', 'huff', 'huge', 'hugs', 'hula', 'hulk', 'hull', 'hump', 'hums', 'hung', 'hunk', 'hunt', 'hurl', 'hurt', 'hush', 'husk', 'huts', 'hymn', 'hype', 'hypo', 'iamb', 'ibex', 'ibis', 'iced', 'ices', 'icky', 'icon', 'idea', 'idem', 'ides', 'idle', 'idly', 'idol', 'idyl', 'iffy', 'ikon', 'ilea', 'ilia', 'ilks', 'ills', 'imam', 'imps', 'inch', 'info', 'inks', 'inky', 'inns', 'into', 'ions', 'iota', 'ires', 'iris', 'irks', 'iron', 'isle', 'isms', 'itch', 'item', 'jabs', 'jack', 'jade', 'jags', 'jail', 'jamb', 'jams', 'jape', 'jars', 'jato', 'java', 'jaws', 'jays', 'jazz', 'jean', 'jeep', 'jeer', 'jeez', 'jell', 'jerk', 'jest', 'jets', 'jibe', 'jibs', 'jiff', 'jigs', 'jilt', 'jinn', 'jinx', 'jive', 'jobs', 'jock', 'jogs', 'john', 'join', 'joke', 'joky', 'jolt', 'josh', 'jots', 'jowl', 'joys', 'judo', 'jugs', 'jump', 'junk', 'jury', 'just', 'jute', 'juts', 'kale', 'kart', 'kayo', 'keel', 'keen', 'keep', 'kegs', 'kelp', 'keno', 'kens', 'kent', 'kepi', 'kept', 'kerb', 'keys', 'khan', 'kick', 'kids', 'kill', 'kiln', 'kilo', 'kilt', 'kind', 'kine', 'king', 'kink', 'kips', 'kirk', 'kiss', 'kite', 'kith', 'kits', 'kiwi', 'knee', 'knew', 'knit', 'knob', 'knot', 'know', 'kola', 'kook', 'labs', 'lace', 'lack', 'lacs', 'lacy', 'lade', 'lads', 'lady', 'lags', 'laid', 'lain', 'lair', 'lake', 'lama', 'lamb', 'lame', 'lamp', 'lams', 'land', 'lane', 'lank', 'laps', 'lard', 'lark', 'lash', 'lass', 'last', 'late', 'lath', 'laud', 'lava', 'lave', 'lawn', 'laws', 'lays', 'laze', 'lazy', 'lead', 'leaf', 'leak', 'lean', 'leap', 'leas', 'lech', 'leek', 'leer', 'lees', 'left', 'legs', 'leis', 'lend', 'lens', 'lent', 'lept', 'less', 'lest', 'lets', 'levy', 'lewd', 'liar', 'libs', 'lice', 'lick', 'lido', 'lids', 'lied', 'lief', 'lien', 'lies', 'lieu', 'life', 'lift', 'like', 'lilt', 'lily', 'limb', 'lime', 'limn', 'limo', 'limp', 'limy', 'line', 'ling', 'link', 'lint', 'lion', 'lips', 'lira', 'lire', 'lisp', 'list', 'lite', 'live', 'load', 'loaf', 'loam', 'loan', 'lobe', 'lobs', 'loch', 'loci', 'lock', 'loco', 'lode', 'loft', 'loge', 'logo', 'logs', 'logy', 'loin', 'loll', 'lone', 'long', 'look', 'loom', 'loon', 'loop', 'loot', 'lope', 'lops', 'lord', 'lore', 'lorn', 'lose', 'loss', 'lost', 'loth', 'lots', 'loud', 'lour', 'lout', 'love', 'lows', 'luau', 'lube', 'luck', 'luff', 'lugs', 'lull', 'lump', 'lung', 'lure', 'lurk', 'lush', 'lust', 'lute', 'lyes', 'lynx', 'lyre', 'mace', 'mach', 'macs', 'made', 'mads', 'magi', 'mags', 'maid', 'mail', 'maim', 'main', 'make', 'male', 'mall', 'malt', 'mama', 'mane', 'mans', 'many', 'maps', 'mare', 'mark', 'marl', 'mars', 'mart', 'mash', 'mask', 'mass', 'mast', 'mate', 'math', 'mats', 'matt', 'maul', 'maws', 'maxi', 'mayo', 'mays', 'maze', 'mead', 'meal', 'mean', 'meat', 'meds', 'meed', 'meek', 'meet', 'mega', 'meld', 'melt', 'memo', 'mend', 'menu', 'meow', 'mere', 'mesa', 'mesh', 'mess', 'mete', 'mewl', 'mews', 'mica', 'mice', 'midi', 'mien', 'miff', 'mike', 'mild', 'mile', 'milk', 'mill', 'mils', 'milt', 'mime', 'mind', 'mine', 'mini', 'mink', 'mint', 'minx', 'mire', 'miry', 'miss', 'mist', 'mite', 'mitt', 'mixt', 'moan', 'moat', 'mobs', 'mock', 'mode', 'mods', 'moil', 'mold', 'mole', 'moll', 'molt', 'moms', 'monk', 'mono', 'mood', 'moon', 'moor', 'moos', 'moot', 'mope', 'mops', 'mopy', 'more', 'morn', 'mosh', 'moss', 'most', 'mote', 'moth', 'mots', 'moue', 'move', 'mown', 'mows', 'much', 'muck', 'muds', 'muff', 'mugs', 'mule', 'mull', 'mums', 'murk', 'muse', 'mush', 'musk', 'muss', 'must', 'mute', 'mutt', 'myna', 'myth', 'nabs', 'nags', 'naif', 'nail', 'name', 'nape', 'naps', 'narc', 'nark', 'nary', 'nave', 'navy', 'nays', 'neap', 'near', 'neat', 'neck', 'need', 'neon', 'nerd', 'nest', 'nets', 'nett', 'nevi', 'news', 'newt', 'next', 'nibs', 'nice', 'nick', 'nigh', 'nils', 'nine', 'nips', 'nite', 'nits', 'node', 'nods', 'noel', 'noes', 'none', 'nook', 'noon', 'nope', 'norm', 'nose', 'nosh', 'nosy', 'note', 'noun', 'nova', 'nows', 'nubs', 'nude', 'nuke', 'null', 'numb', 'nuns', 'nuts', 'oafs', 'oaks', 'oars', 'oath', 'oats', 'obey', 'obis', 'obit', 'oboe', 'odds', 'odes', 'odor', 'offs', 'ogle', 'ogre', 'ohms', 'oils', 'oily', 'oink', 'okay', 'okra', 'olds', 'oleo', 'oles', 'omen', 'omit', 'once', 'ones', 'only', 'onto', 'onus', 'onyx', 'oohs', 'oops', 'ooze', 'oozy', 'opal', 'oped', 'open', 'opes', 'opts', 'opus', 'oral', 'orbs', 'ores', 'orgy', 'orzo', 'ouch', 'ours', 'oust', 'outs', 'ouzo', 'oval', 'oven', 'over', 'ovum', 'owed', 'owes', 'owls', 'owns', 'oxen', 'pace', 'pack', 'pact', 'pads', 'page', 'paid', 'pail', 'pain', 'pair', 'pale', 'pall', 'palm', 'pals', 'pane', 'pang', 'pans', 'pant', 'papa', 'paps', 'para', 'pare', 'park', 'pars', 'part', 'pass', 'past', 'pate', 'path', 'pats', 'pave', 'pawl', 'pawn', 'paws', 'pays', 'peak', 'peal', 'pear', 'peas', 'peat', 'peck', 'peed', 'peek', 'peel', 'peen', 'peep', 'peer', 'pees', 'pegs', 'peke', 'pelf', 'pelt', 'pend', 'pens', 'pent', 'peon', 'peps', 'perk', 'perm', 'pert', 'peso', 'pest', 'pets', 'pews', 'phat', 'phew', 'phis', 'pica', 'pick', 'pics', 'pied', 'pier', 'pies', 'pigs', 'pike', 'pile', 'pill', 'pimp', 'pine', 'ping', 'pink', 'pins', 'pint', 'piny', 'pipe', 'pips', 'piss', 'pita', 'pith', 'pits', 'pity', 'pixy', 'plan', 'plat', 'play', 'plea', 'pled', 'plod', 'plop', 'plot', 'plow', 'ploy', 'plug', 'plum', 'plus', 'pock', 'pods', 'poem', 'poet', 'pois', 'poke', 'poky', 'pole', 'poll', 'polo', 'pols', 'pomp', 'pond', 'pone', 'pony', 'poof', 'pooh', 'pool', 'poop', 'poor', 'pope', 'pops', 'pore', 'pork', 'porn', 'port', 'pose', 'posh', 'post', 'posy', 'pots', 'pour', 'pout', 'pram', 'pray', 'prep', 'prey', 'prig', 'prim', 'prod', 'prof', 'prom', 'prop', 'pros', 'prow', 'psis', 'psst', 'pubs', 'puce', 'puck', 'puff', 'pugs', 'puke', 'pule', 'pull', 'pulp', 'puma', 'pump', 'punk', 'puns', 'punt', 'puny', 'pupa', 'pups', 'pure', 'purl', 'purr', 'push', 'puss', 'puts', 'putt', 'pyre', 'quad', 'quay', 'quid', 'quip', 'quit', 'quiz', 'race', 'rack', 'racy', 'rads', 'raft', 'raga', 'rage', 'rags', 'raid', 'rail', 'rain', 'raja', 'rake', 'ramp', 'rams', 'rand', 'rang', 'rani', 'rank', 'rant', 'rape', 'raps', 'rapt', 'rare', 'rash', 'rasp', 'rate', 'rats', 'rave', 'raws', 'rays', 'raze', 'razz', 'read', 'real', 'ream', 'reap', 'rear', 'recs', 'redo', 'reds', 'reed', 'reef', 'reek', 'reel', 'refs', 'rein', 'rely', 'rems', 'rend', 'rent', 'reps', 'rest', 'revs', 'rhea', 'rhos', 'rial', 'ribs', 'rice', 'rich', 'rick', 'ride', 'rids', 'rife', 'riff', 'rift', 'rigs', 'rile', 'rill', 'rime', 'rims', 'rind', 'ring', 'rink', 'riot', 'ripe', 'rips', 'rise', 'risk', 'rite', 'rive', 'road', 'roam', 'roan', 'roar', 'robe', 'robs', 'rock', 'rode', 'rods', 'roes', 'roil', 'role', 'roll', 'romp', 'rood', 'roof', 'rook', 'room', 'root', 'rope', 'ropy', 'rose', 'rosy', 'rote', 'rots', 'roue', 'rout', 'rove', 'rows', 'rube', 'rubs', 'ruby', 'rude', 'rued', 'rues', 'ruff', 'rugs', 'ruin', 'rule', 'rump', 'rums', 'rune', 'rung', 'runs', 'runt', 'ruse', 'rush', 'rusk', 'rust', 'ruts', 'ryes', 'sack', 'sacs', 'safe', 'saga', 'sage', 'sago', 'sags', 'said', 'sail', 'sake', 'saki', 'sale', 'salt', 'same', 'sand', 'sane', 'sang', 'sank', 'sans', 'saps', 'sari', 'sash', 'sass', 'sate', 'save', 'sawn', 'saws', 'says', 'scab', 'scad', 'scam', 'scan', 'scar', 'scat', 'scow', 'scud', 'scum', 'seal', 'seam', 'sear', 'seas', 'seat', 'secs', 'sect', 'seed', 'seek', 'seem', 'seen', 'seep', 'seer', 'sees', 'self', 'sell', 'semi', 'send', 'sent', 'sera', 'sere', 'serf', 'sets', 'sewn', 'sews', 'sexy', 'shad', 'shag', 'shah', 'sham', 'shat', 'shay', 'shed', 'shes', 'shew', 'shim', 'shin', 'ship', 'shit', 'shiv', 'shod', 'shoe', 'shoo', 'shop', 'shot', 'show', 'shun', 'shut', 'sick', 'sics', 'side', 'sift', 'sigh', 'sign', 'silk', 'sill', 'silo', 'silt', 'sine', 'sing', 'sink', 'sins', 'sips', 'sire', 'sirs', 'site', 'sits', 'size', 'skas', 'skew', 'skid', 'skim', 'skin', 'skip', 'skis', 'skit', 'slab', 'slag', 'slam', 'slap', 'slat', 'slaw', 'slay', 'sled', 'slew', 'slid', 'slim', 'slip', 'slit', 'slob', 'sloe', 'slog', 'slop', 'slot', 'slow', 'slue', 'slug', 'slum', 'slur', 'slut', 'smit', 'smog', 'smug', 'smut', 'snag', 'snap', 'snip', 'snit', 'snob', 'snot', 'snow', 'snub', 'snug', 'soak', 'soap', 'soar', 'sobs', 'sock', 'soda', 'sods', 'sofa', 'soft', 'soil', 'sold', 'sole', 'soli', 'solo', 'sols', 'some', 'song', 'sons', 'soon', 'soot', 'sops', 'sore', 'sort', 'sots', 'soul', 'soup', 'sour', 'sous', 'sown', 'sows', 'soya', 'soys', 'span', 'spar', 'spas', 'spat', 'spay', 'spec', 'sped', 'spew', 'spin', 'spit', 'spot', 'spry', 'spud', 'spun', 'spur', 'stab', 'stag', 'star', 'stat', 'stay', 'stem', 'step', 'stet', 'stew', 'stir', 'stop', 'stow', 'stub', 'stud', 'stun', 'stye', 'subs', 'such', 'suck', 'suds', 'sued', 'sues', 'suet', 'suit', 'sulk', 'sumo', 'sump', 'sums', 'sung', 'sunk', 'suns', 'sups', 'sure', 'surf', 'swab', 'swag', 'swam', 'swan', 'swap', 'swat', 'sway', 'swig', 'swim', 'swob', 'swop', 'swum', 'sync', 'tabs', 'tabu', 'tack', 'taco', 'tact', 'tads', 'tags', 'tail', 'take', 'talc', 'tale', 'tali', 'talk', 'tall', 'tame', 'tamp', 'tams', 'tang', 'tank', 'tans', 'tape', 'taps', 'tare', 'tarn', 'taro', 'tarp', 'tars', 'tart', 'task', 'tats', 'taus', 'taut', 'taxi', 'teak', 'teal', 'team', 'tear', 'teas', 'teat', 'tech', 'teed', 'teem', 'teen', 'tees', 'tell', 'temp', 'tend', 'tens', 'tent', 'term', 'tern', 'test', 'text', 'than', 'that', 'thaw', 'thee', 'them', 'then', 'thew', 'they', 'thin', 'this', 'thou', 'thru', 'thud', 'thug', 'thus', 'tick', 'tics', 'tide', 'tidy', 'tied', 'tier', 'ties', 'tiff', 'tike', 'tile', 'till', 'tilt', 'time', 'tine', 'ting', 'tins', 'tint', 'tiny', 'tipi', 'tips', 'tire', 'tiro', 'tits', 'toad', 'toed', 'toes', 'tofu', 'toga', 'togs', 'toil', 'toke', 'told', 'tole', 'toll', 'tomb', 'tome', 'toms', 'tone', 'tong', 'tons', 'tony', 'took', 'tool', 'toot', 'tops', 'tore', 'torn', 'tors', 'tort', 'toss', 'tost', 'tote', 'tots', 'tour', 'tout', 'town', 'tows', 'toys', 'tram', 'trap', 'tray', 'tree', 'trek', 'trey', 'trig', 'trim', 'trio', 'trip', 'trod', 'trot', 'trow', 'troy', 'true', 'tsar', 'tuba', 'tube', 'tubs', 'tuck', 'tuft', 'tugs', 'tuna', 'tune', 'tuns', 'turd', 'turf', 'turn', 'tush', 'tusk', 'tuts', 'tutu', 'twas', 'twig', 'twin', 'twit', 'twos', 'tyke', 'type', 'typo', 'tyre', 'tyro', 'tzar', 'ugly', 'ulna', 'umps', 'undo', 'unit', 'unto', 'upon', 'urea', 'urge', 'uric', 'urns', 'used', 'user', 'uses', 'vain', 'vale', 'vamp', 'vane', 'vans', 'vary', 'vase', 'vast', 'vats', 'veal', 'veep', 'veer', 'vegs', 'veil', 'vein', 'vela', 'veld', 'vend', 'vent', 'verb', 'very', 'vest', 'veto', 'vets', 'vial', 'vibe', 'vice', 'vied', 'vies', 'view', 'vile', 'vims', 'vine', 'vino', 'viol', 'visa', 'vise', 'vita', 'viva', 'void', 'vole', 'volt', 'vote', 'vows', 'wade', 'wadi', 'wads', 'waft', 'wage', 'wags', 'waif', 'wail', 'wain', 'wait', 'wake', 'wale', 'walk', 'wall', 'wand', 'wane', 'want', 'ward', 'ware', 'warm', 'warn', 'warp', 'wars', 'wart', 'wary', 'wash', 'wasp', 'wast', 'watt', 'wave', 'wavy', 'waxy', 'ways', 'weak', 'weal', 'wean', 'wear', 'webs', 'weds', 'weed', 'week', 'ween', 'weep', 'weer', 'weft', 'weir', 'weld', 'well', 'welt', 'wend', 'wens', 'went', 'wept', 'were', 'west', 'wets', 'wham', 'what', 'whee', 'when', 'whet', 'whew', 'whey', 'whim', 'whip', 'whir', 'whit', 'whiz', 'whoa', 'whom', 'whys', 'wick', 'wide', 'wife', 'wigs', 'wild', 'wile', 'will', 'wilt', 'wily', 'wimp', 'wind', 'wine', 'wing', 'wink', 'wino', 'wins', 'winy', 'wipe', 'wire', 'wiry', 'wise', 'wish', 'wisp', 'wist', 'with', 'wits', 'wive', 'woad', 'woes', 'woke', 'woks', 'wold', 'wolf', 'womb', 'wonk', 'wont', 'wood', 'woof', 'wool', 'woos', 'word', 'wore', 'work', 'worm', 'worn', 'wort', 'wove', 'wows', 'wrap', 'wren', 'writ', 'wuss', 'yack', 'yaks', 'yams', 'yang', 'yank', 'yaps', 'yard', 'yarn', 'yawl', 'yawn', 'yaws', 'yeah', 'year', 'yeas', 'yegg', 'yell', 'yelp', 'yens', 'yeps', 'yeti', 'yews', 'yins', 'yipe', 'yips', 'yoga', 'yogi', 'yoke', 'yolk', 'yore', 'your', 'yous', 'yowl', 'yuan', 'yuck', 'yuks', 'yule', 'yups', 'yurt', 'zany', 'zaps', 'zeal', 'zebu', 'zeds', 'zero', 'zest', 'zeta', 'zinc', 'zing', 'zips', 'zits', 'zone', 'zoom', 'zoos', 'nock', 'twat', 'ruly', 'cunt', 'shat', 'jews', 'pome', 'polt', 'holt', 'aril', 'byre', 'spam', 'kaki', 'luge', 'zags', 'blog', 'lune', 'mage'); 
