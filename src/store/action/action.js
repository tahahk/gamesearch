import ActionTypes from '../constant/constant';
// import history from '../../History';
import $ from 'jquery'



    export function getGames(startDate,endDate) {
        console.log(endDate)
        return function (dispatch) {
            $.getJSON("https://www.giantbomb.com/api/games/?api_key=47ed8c341b288a13e922934235ee604f0434dc45&format=" +
                "jsonp&json_callback=?&filter=original_release_date:"+startDate+'|'+endDate+
                "&field_list=name,image,original_release_date,site_detail_url&callback=?", data => {
                   var result = data.results
                   dispatch( gamesList(result))
                 }
            )
        }
    }


    function gamesList(data){
        return {
            type: ActionTypes.GET_GAMES, payload: data
        }
    }
