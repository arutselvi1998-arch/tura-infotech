// Compatibility entry points for the requested production URL plan.
// Existing application internals still use hash routing.
(()=>{
 const base=new URL(document.baseURI).pathname,params=new URLSearchParams(location.search);
 function mapRoute(path){
  const segments=path.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
  if(segments[0]==='login')return 'auth/signin';
  if(segments[0]==='register')return 'auth/signup';
  if(segments[0]==='admin')return segments.length===1?'admin/dashboard':segments.join('/');
  if(segments[0]!=='student')return null;
  const names={'dashboard':'overview','my-learning-summary':'summary','continue-learning':'continue','upcoming-deadlines':'deadlines','recent-learning-activity':'activity','my-courses':'courses','video-lessons':'lessons','live-classes':'schedule',progress:'progress',assignments:'assignments',assessments:'assessments',projects:'projects',certificates:'certificates',support:'support',notifications:'notifications',payments:'payments',profile:'profile'};
  const section=names[segments[1]||'dashboard'];if(!section)return null;
  if(segments[1]==='my-courses'&&segments[2]&&segments[3]==='learn'){
   try{sessionStorage.setItem('tura-student-entry-lesson',JSON.stringify({course:segments[2],lesson:/^\d+$/.test(segments[4]||'')?Number(segments[4]):0}))}catch{}
   return `learn/video/${encodeURIComponent(segments[2])}`;
  }
  return ['dashboard',section,...segments.slice(2)].join('/');
 }
 const restored=params.get('tura_route');
 const path=restored&&/^\/(?:student|admin|login|register)(?:\/|$)/.test(restored)&&!restored.includes('//')?restored:location.pathname.startsWith(base)?'/'+location.pathname.slice(base.length):location.pathname;
 const target=mapRoute(path);if(target){params.delete('tura_route');const search=params.toString();history.replaceState(null,'',base+(search?'?'+search:'')+'#'+target)}
 const aliases=()=>{
  const hash=location.hash.slice(1),path='/'+hash;
  if(!/^\/(?:login|register|student)(?:\/|$)/.test(path))return;
  // Preserve already-supported internal student aliases.
  if(/^student\/(?:overview|courses|lessons|schedule)(?:\/|$)/.test(hash))return;
  const mapped=mapRoute(path);if(mapped&&mapped!==hash)location.replace(base+location.search+'#'+mapped);
 };
 window.addEventListener('hashchange',event=>{const before=location.hash;aliases();if(before!==location.hash)event.stopImmediatePropagation()},true);aliases();
})();
