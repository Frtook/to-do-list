let arr = []
let counter_child=0
function add_task(){
  let task = document.getElementById('text').value
  if(task.length>0){
    counter_child+=1
    let newP = document.createElement('p')
    let newSpan = document.createElement('span')
    let newButton = document.createElement('button')
    newP.id=counter_child
    newButton.onclick=
    function (){
      if(arr.length>0){
        arr.pop()
      }
      arr.push(newP.id)
      del()
    }
    newSpan.textContent=task
    newButton.textContent='x'
    newSpan.appendChild(newButton)
    newP.appendChild(newSpan)
    document.getElementById('task').appendChild(newP)
    document.getElementById('text').value=''

  }
  else{
    alert("Enter Title")
  }

}
function createElement(){
  
}
function del(){
  document.getElementById(arr[arr.length-1]).remove()   

}