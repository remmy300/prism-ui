// Basic checks: required files exist, docs copies match src, JSON valid, JS parses, every component is demoed.
import fs from 'node:fs';import {execFileSync} from 'node:child_process';
let fail=0;const err=m=>{console.error('FAIL:',m);fail=1};
for(const f of ['README.md','LICENSE','CONTRIBUTING.md','CODE_OF_CONDUCT.md','docs/index.html','src/tokens.css','src/components.css','src/prism-ui.js'])if(!fs.existsSync(f))err('missing '+f);
JSON.parse(fs.readFileSync('package.json','utf8'));
for(const f of fs.readdirSync('src'))if(fs.readFileSync('src/'+f,'utf8')!==fs.readFileSync('docs/'+f,'utf8'))err(`docs/${f} out of sync (run npm run sync-docs)`);
execFileSync('node',['--check','src/prism-ui.js']);
const html=fs.readFileSync('docs/index.html','utf8');
for(const c of ['button','input','card','badge','modal','tabs','toast','tooltip'])if(!html.includes(`id="${c}"`))err('docs missing '+c);
for(const t of ['color','space','font-size','radius','shadow'])if(!fs.readFileSync('src/tokens.css','utf8').includes(`--pr-${t}`))err('token '+t);
console.log(fail?'Checks failed':'All checks passed');process.exit(fail);
