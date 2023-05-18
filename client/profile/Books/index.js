<span className="underline"
onClick={()=>{
    setOpenIssues(true);
    setSelectedBook(record);
}}

>
    Issues

</span>

//14th line
const [openIssuesForm,setOpenIssuesForm]=React.useState(false);

//119th line

<span 
className="underline"
onClick={()=>{
    setOpenIssuesForm(true);
    setSelectedBook(record);
}}
> 
Issue Book
</span>

//147th line

<Issues 
open={openIssues}
setOpen={setOpenIssues}
selectedBook={selectedBook}
setSelectedBook={setSelectedBook}
/>

//167th line
{openIssuesForm && (
    <IssueForm
    open={openIssuesForm}
    setOpen={setOpenIssuesForm}
    selectedBook={selectedBook}
    setSelectedBook={setSelectedBook}
    />
)}