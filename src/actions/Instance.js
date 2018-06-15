//单列只存放需要初始的方法
class Instance{
	static instance=null;
	static getInstance(){
		if(!Instance.instance){
			Instance.instance=new Instance();
		}
		return Instance.instance
	}
	static showAll(){
		console.log(Object.keys(Instance.instance))
	}
	//添加方法到实例
	static addMethod(method,name){
		const instance=Instance.getInstance();
		if(!name)name=method.name;
		if(!name){
			console.error('单列:方法未指定名称');
			return;
		}
		instance[name]=method;
	}
	//获取单列中的方法
	static getMethod(name){
		const instance=Instance.getInstance();
		/*if(!instance[name]){
			console.error(`单列:${name}方法不存在`);
			return;
		}*/
		return instance[name]
	}
}
export default Instance;