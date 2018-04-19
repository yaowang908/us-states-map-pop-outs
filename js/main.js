//empty stateUniversities object, contains states ID as key
let stateUniversities = {
    "AL": {
        // structure
        // 0 : '2',
        // 1 : { rank : '86',enName : 'University of Alabama',zhName : '阿拉巴马大学'},
        // 2 : { rank: '91', enName: 'Auburn University', zhName: '奥本大学'}
    },
    "AK": {

    },
    "AZ": {

    },
    "AR": {

    },
    "CA": {
        
    },
    "CO": {
        
    },
    "CT": {
        
    },
    "DE": {
        
    },
    "FL": {
        
    },
    "GA": {
        
    },
    "HI": {

    },
    "ID": {

    },
    "IL": {
        
    },
    "IN": {
        
    },
    "IA": {
        
    },
    "KS": {

    },
    "KY": {

    },
    "LA": {
       
    },
    "ME": {

    },
    "MD": {
        
    },
    "MA": {
       
    },
    "MI": {
        
    },
    "MN": {

    },
    "MS": {

    },
    "MO": {

    },
    "MT": {

    },
    "NE": {

    },
    "NV": {

    },
    "NH": {

    },
    "NJ": {

    },
    "NM": {

    },
    "NY": {

    },
    "NC": {

    },
    "ND": {

    },
    "OH": {

    },
    "OK": {

    },
    "OR": {

    },
    "PA": {

    },
    "RI": {

    },
    "SC": {

    },
    "SD": {

    },
    "TN": {

    },
    "TX": {

    },
    "UT": {

    },
    "VT": {

    },
    "VA": {

    },
    "WA": {

    },
    "WV": {

    },
    "WI": {

    },
    "WY": {

    }
};
function showDialog(stateID) {
    processData(JSONdata, stateID);
    $('#state-dialog-title').html(states[stateID]);
    let uBuffer = stateUniversities[stateID];
    let temp = "<div class='row'><div class='col-2'>排名</div><div class='col-7'>学校</div><div class='col-3'>所在地区</div></div>";
    // console.log(uBuffer);
    if (uBuffer[0]) {
        for (let i = 1; i <= uBuffer[0]; i++) {
            temp = temp + "<div class='row'><div class='col-2'>" + uBuffer[i].rank + "</div><div class='col-7'><a class='text-dark' href='https://www.google.com/search?q=" + uBuffer[i].enName + "'>" + uBuffer[i].enName + "</a></div><div class='col-3'>" + uBuffer[i].location + "</div></div>";
        }
    } else {
        temp = "未有进入前二百的大学";
    }
    $('#state-dialog-body').html(temp);
    $('#state-dialog').modal('show');
    // console.log(stateID);
    // console.log(states[stateID]);
}
/**
 * accept json data, and stateID, 
 *  prepare data into stateUniversities[stateID]
 * return stateUniversities[stateID]
 * stateUniversities structure
 *     "MI":{
 *        0: '2',
 *        1: { rank: '28', enName: 'University of Michigan Ann Arbor', zhName: '密歇根大学-安娜堡分校' },
 *        2: { rank: '73', enName: 'Michigan State University', zhName: '密歇根州立大学' }
 *      },
*/
function processData(JSONData, stateID) {
    // let temp = $.parseJSON(JSONData);
    let temp = JSONData;
    /**
     * temp structure
     * Name
     * Location (town)
     * State
     * Rank
     * Description
     * Tuition
     * In-state
     * Undergrad Enrollment
    */
    let universitiesCount = 0;
    for (let item in temp) {
        // console.log(temp[item]);
        if (temp[item].State === stateID) {
            // console.log(temp[item].State+' vs '+stateID);
            // if university in JSONdata is in state, then add it to stateUniversities[stateID]
            universitiesCount++;
            stateUniversities[stateID][0] = universitiesCount;
            //stateUniversities[stateID][universitiesCount] init
            stateUniversities[stateID][universitiesCount] = stateUniversities[stateID][universitiesCount] || {};
            stateUniversities[stateID][universitiesCount].rank = temp[item].Rank;
            stateUniversities[stateID][universitiesCount].enName = temp[item].Name;
            stateUniversities[stateID][universitiesCount].zhName = '';
            stateUniversities[stateID][universitiesCount].location = temp[item].Location; //town name
        }
    }
}
/**
 * show tooltip when mouse hover an element
 * accept element argument
 *        
*/
function showToolTip(evt) {
    // console.log($(evt));
    // $(evt.target).attr("data-original-title","&lt;h4&gt;"+states[evt.target.id]+"&lt;/h4&gt;&lt;p&gt;Click for more info.&lt;/p&gt;");
    // $('[data-toggle="tooltip"]').tooltip();

}