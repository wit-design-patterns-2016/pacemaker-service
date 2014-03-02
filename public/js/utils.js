
function apiDelete(api)
{
  $.ajax({
          url: api,
          contentType: 'application/json',
          type: 'DELETE',
          data: "{}",
          processData: false,
          dataType: 'json'
      })
}

function apiPost(api, object, doneCallback )
{
  $.ajax({
    url: api,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(object),
    processData: false,
    dataType: 'json'
  }).done (function (data)
  {
    doneCallback(data);
  });
}