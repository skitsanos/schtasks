schtasks
===

Windows Task Scheduler Wrapper for Node.js

----

>Task Scheduler is a component of Microsoft Windows that provides the ability to schedule the launch of programs or scripts at pre-defined times or after specified time intervals. It was first introduced in the Microsoft Plus! for Windows 95 as System Agent but was renamed to Task Scheduler in Windows 98. The Windows Event Log service must be running before the Task Scheduler starts up.


#### Using

```js
var ScheduledTasks = require('schtasks');
var tasks = new ScheduledTasks();
```

##### Query Tasks

```js
tasks.query(function (o)
 {
 console.log(o);
 });
```

##### Creating new Task

```js
var job = {
	taskname: 'test1',
	schedule: 'minute',
	recur: 5,
	taskrun: 'notepad.exe',
	starttime: '16:28',      //hh:mm (24 hour)
	startdate: '08/10/2013', //dd/mm/yyyy
	enddate: '09/10/2013', //dd/mm/yyyy
	forcecreate: true
};

tasks.create(job, function (o)
{
	console.log(o);

	tasks.showSid('test1', function (o)
	{
		console.log(o);
});
```

##### Run Task

```js
tasks.run('TASK_NAME', false, function (o)
 {
 console.log(o);
 });
```

##### Show SID

```js
tasks.showSid('\\RacTask', function (o)
 {
 console.log(o);
 });
```

#### Delete Task

```js
tasks.delete('some task', function (o)
 {
 console.log(o);
 });
```

