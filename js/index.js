console.log('index.js loaded');

let $raw = $('#score');
let $table = $('#table');
let num = parseInt($('#num').val());

$table.children().remove();

function generate(){
	$table.children().remove();
	let tmpData = $raw.val()
		.split('\n')
		.map(i => i.split(' ')
			.map(i => parseInt(i))
		)
		.sort((a, b) => a[0] > b[0]);
	let data = new Array(num).fill(0);
	for(let i of tmpData){
		if(i[0] > num || i[0] <= 0){
			alert('座號有問題');
			return;
		}
		data[i[0]-1] = i[1];
	}
	console.log(data);
	for(let i in data){
		$table.append(`<tr><td>${data[i]}</td></tr>`);
	}

}

function reset(){
	$raw.val('');
	$table.children().remove();
}

$('#generate').click(generate);
$('#reset').click(reset);
