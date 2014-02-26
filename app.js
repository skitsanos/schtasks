/**
 * app.js
 * @author Skitsanos (info@skitsanos.com)
 * @version 1.0 (9/25/13)
 */

var ScheduledTasks = require('schtasks');

var tasks = new ScheduledTasks();

/*tasks.query(function (o)
 {
 console.log(o);
 });*/

/*tasks.run('FacebookUpdateTaskUserS-1-5-21-3159047492-4121401135-2570012017-1000Core', false, function (o)
 {
 console.log(o);
 });*/

/*tasks.showSid('\\RacTask', function (o)
 {
 console.log(o);
 });*/

/*tasks.delete('some task', function (o)
 {
 console.log(o);
 });*/
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
        job.enddate = '17/10/2013';
        tasks.change(job, function (o)
        {
            console.log(o);
            tasks.showSid('test1', function (o)
            {
                console.log(o);
            });
        });
	});
});







