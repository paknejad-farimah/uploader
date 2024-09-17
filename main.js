let file;
const dragArea=document.querySelector('.drag-area');
const header=document.querySelector('header');
const button=document.querySelector('button');
const input=document.querySelector('input');
button.onclick=()=>{
    input.click();
}
input.addEventListener('change' , function(){
    file = this.files[0];
    dragArea.classList.add('active')
    showImage();
})
dragArea.addEventListener('dragover' ,function(event){
    event.preventDefault();
    dragArea.classList.add('active')
    header.textContent = "انتشار برای بارگذاری پرونده"
})
dragArea.addEventListener('dragleave' ,function(){
    dragArea.classList.add('active')
    header.textContent = "برای بارگذاری بکش و رها کن"
})
dragArea.addEventListener('drop', function(event){
    event.preventDefault();
    file=event.dataTransfer.files[0];
    showImage();
})
function showImage(){
    let fileType=file.type
let validExtention=["image/jpg","image/jpeg","image/png"]
if(validExtention.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.onload=()=>{
        let fileURL=fileReader.result;
        let imgTag = `<img src="${fileURL}" />`;
        dragArea.innerHTML=imgTag
    }
    fileReader.readAsDataURL(file);
}else{
  alert("فایل انتخابی عکس نیست لطفا عکس اآپلود کنید")
  dragArea.classList.remove('active');
    }

}