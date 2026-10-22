export function validRows(rows){return rows.filter(r=>String(r.score).trim()!==''&&Number.isFinite(Number(r.score))&&Number(r.score)>=0&&Number(r.score)<=100)}
export function stats(rows){const valid=validRows(rows);return {count:valid.length,average:valid.length?valid.reduce((s,r)=>s+Number(r.score),0)/valid.length:null,highest:valid.length?Math.max(...valid.map(r=>Number(r.score))):null}}
export function csvCell(v){return '"'+String(v).replaceAll('"','""')+'"'}
