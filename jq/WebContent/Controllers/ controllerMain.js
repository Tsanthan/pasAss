$(document).on("click","#btnLogin",function()
{
	var result = isValidFormLogin();
	if(result=="true")
		{
		$("#formLogin").submit();
		}
	else
		{
		$("#divStsMsgLogin").html(result);
		}
});

function isValidLogin()
{
	if($trim($("#txtUserName").val())==""){
		return "Enter Username";
	}
	if($trim($("#txtPassword").val())==""){
		return "Enter Password";
	}
	return "true";
}

function isValidFormItem() 
{  
	if ($.trim($("#txtItemName").val()) == "") {  
		return "Enter Item Name"; 
		} 
	if ($.trim($("#txtItemDesc").val()) == "") {  
		return "Enter Item Desc"; 
		} 
	return "true";
}


//--Items------------
//-- save/Update--

$(document).on("click","#btnSave", function()
{
	var result = isValidFormItem();
	if(result=="true")
	{	$("#formItems").submit(); }
	else
	{	$("#divStsMsgItem").html(result); }
});

//--edit--
$(document).on("clcik", "#brnEdit", function() 
{
	$("#hidMode").val("update");
	$("#hidID").val($(this).attr("param"));
	$("#txtItemName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#txtItemDesc").val($(this).closest("tr").find('td:eq(2)').text());
});

//-remoce--
$(document).on("click", "#btnRemove", function()
{
	$("#hidMode").val("remove");
	$("#hidID").val($(this).attr("param"));
	var res = confirm("Are you sure?");
		if(res == true){
			$("#formItems").submit();
		}
});






















