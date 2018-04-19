//empty stateUniversities object, contains states ID as key
let stateUniversities = {
    "AL": {
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
        // 0: '12',
        // 1: { rank: '5', enName: 'Stanford University', zhName: '斯坦福大学' },
        // 2: { rank: '10', enName: 'California Institute of Technology', zhName: '加州理工学院' },
        // 3: { rank: '20', enName: 'University of California - Berkeley', zhName: '加州大学伯克利分校' },
        // 4: { rank: '23', enName: 'University of Southern California', zhName: '南加州大学' },
        // 5: { rank: '23', enName: 'University of California - Los Angeles', zhName: '加州大学洛杉矶分校' },
        // 6: { rank: '39', enName: 'University of California - San Diego', zhName: '加州大学圣地亚哥分校' },
        // 7: { rank: '39', enName: 'University of California - Davis', zhName: '加州大学戴维斯分校' },
        // 8: { rank: '41', enName: 'University of California - Santa Barbara', zhName: '加州大学圣塔芭芭拉分校' },
        // 9: { rank: '49', enName: 'University of California - Irvine', zhName: '加州大学欧文分校' },
        // 10: { rank: '57', enName: 'Pepperdine University', zhName: '佩珀代因大学' },
        // 11: { rank: '86', enName: 'University of California - Santa Cruz', zhName: '加州大学圣克鲁兹分校' },
        // 12: { rank: '91', enName: 'University of San Diego', zhName: '圣地亚哥大学' }
    },
    "CO": {
        // 0: '3',
        // 1: { rank: '86', enName: 'University of Colorado Boulder', zhName: '科罗拉多大学波尔得分校' },
        // 2: { rank: '91', enName: 'Colorado School of Mines', zhName: '科罗拉多矿业大学' },
        // 3: { rank: '91', enName: 'University of Denver', zhName: '丹佛大学' }
    },
    "CT": {
        // 0: '2',
        // 1: { rank: '3', enName: 'Yale University', zhName: '耶鲁大学' },
        // 2: { rank: '57', enName: 'University of Connecticut', zhName: '康涅狄格大学' }
    },
    "DE": {
        // 0: '1',
        // 1: { rank: '75', enName: 'University of Delaware', zhName: '特拉华大学' }
    },
    "FL": {
        // 0: '3',
        // 1: { rank: '47', enName: 'University of Miami', zhName: '迈阿密大学' },
        // 2: { rank: '49', enName: 'University of Florida', zhName: '佛罗里达大学' },
        // 3: { rank: '91', enName: 'Florida State University', zhName: '佛罗里达州立大学' }
    },
    "GA": {
        // 0: '3',
        // 1: { rank: '20', enName: 'Emory University', zhName: '埃默里大学' },
        // 2: { rank: '36', enName: 'Georgia Institute of Technology', zhName: '乔治亚理工学院' },
        // 3: { rank: '60', enName: 'University of Georgia', zhName: '乔治亚大学' }
    },
    "HI": {

    },
    "ID": {

    },
    "IL": {
        // 0: '3',
        // 1: { rank: '5', enName: 'The University of Chicago', zhName: '芝加哥大学' },
        // 2: { rank: '12', enName: 'Northwestern University', zhName: '西北大学' },
        // 3: { rank: '41', enName: 'University of Illinois Urbana Champaign', zhName: '伊利诺伊大学香槟分校' }
    },
    "IN": {
        // 0: '3',
        // 1: { rank: '18', enName: 'University of Notre Dame', zhName: '圣母大学' },
        // 2: { rank: '68', enName: 'Purdue University West Lafayette', zhName: '普渡大学西拉法耶校区' },
        // 3: { rank: '75', enName: 'Indiana University - Bloomington', zhName: '印第安纳大学布卢明顿分校' }
    },
    "IA": {
        // 0: '2',
        // 1: { rank: '73', enName: 'The University of Iowa', zhName: '爱荷华大学' },
        // 2: { rank: '101', enName: 'Iowa State University', zhName: '爱荷华州立大学' }
    },
    "KS": {

    },
    "KY": {

    },
    "LA": {
        // 0: '1',
        // 1: { rank: '52', enName: 'Tulane University', zhName: '杜兰大学' }
    },
    "ME": {

    },
    "MD": {
        // 0: '2',
        // 1: { rank: '12', enName: 'Johns Hopkins University', zhName: '约翰霍普金斯大学' },
        // 2: { rank: '62', enName: 'University of Maryland College Park', zhName: '马里兰大学帕克分校' }
    },
    "MA": {
        // 0: '10',
        // 1: { rank: '2', enName: 'Harvard University', zhName: '哈佛大学' },
        // 2: { rank: '7', enName: 'Massachusetts Institute of Technology', zhName: '麻省理工学院' },
        // 3: { rank: '28', enName: 'Tufts University', zhName: '塔夫斯大学' },
        // 4: { rank: '31', enName: 'Boston College', zhName: '波士顿大学' },
        // 5: { rank: '32', enName: 'Brandeis University', zhName: '布兰迪斯大学' },
        // 6: { rank: '41', enName: 'Boston University', zhName: '波士顿大学' },
        // 7: { rank: '49', enName: 'Northeastern University', zhName: '东北大学' },
        // 8: { rank: '62', enName: 'Worcester Polytechnic Institute', zhName: '伍斯特理工学院' },
        // 9: { rank: '75', enName: 'Clark University', zhName: '克拉克大学' },
        // 10: { rank: '91', enName: 'University of Massachusetts - Amherst', zhName: '马萨诸塞大学安默斯特校区' }
    },
    "MI": {
        // 0: '2',
        // 1: { rank: '28', enName: 'University of Michigan Ann Arbor', zhName: '密歇根大学-安娜堡分校' },
        // 2: { rank: '73', enName: 'Michigan State University', zhName: '密歇根州立大学' }
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
        // console.log("有进入前百的大学");
        for (let i = 1; i <= uBuffer[0]; i++) {
            // console.log(uBuffer[i]);
            temp = temp + "<div class='row'><div class='col-2'>" + uBuffer[i].rank + "</div><div class='col-7'><a class='text-dark' href='https://www.google.com/search?q=" + uBuffer[i].enName + "'>" + uBuffer[i].enName + "</a></div><div class='col-3'>" + uBuffer[i].location + "</div></div>";
        }
    } else {
        temp = "未有进入前百的大学";
        // console.log("未有进入前百的大学");
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