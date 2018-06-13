export default function(bundles,stats,modules){
	//const reg=/\/(\w+)/g
	let fileList=[];
	modules.map(moduleItem=>{
		const name=moduleItem.substring(moduleItem.lastIndexOf('/')+1,moduleItem.lastIndexOf('.') || undefined);
		//console.log(name,)
		Object.values(stats).map(statsList=>{
			statsList.map(statsItem=>{
				if(statsItem.file.includes(`~${name}`)){
					fileList.push(statsItem)
				}
			})
		})
	})
	bundles=bundles.concat(fileList)
	//去重
	let keys={};
	let newBundle=bundles.filter(item=>{
		if(keys[item.file])return false
		keys[item.file]=true;
		return item
	})
	return newBundle
}