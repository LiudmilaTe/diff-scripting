var currentRegion;
//info about date of courses

function chooseCountry(){
	var regions = {	
		EMEA:{
			notes: '<h3 style=\"text-align:center;\">Schedule your course today! Find the Authorized Education Center near you!</h3>',					
			countries: ['AND', 'AUT', 'BEL', 'CHE', 'DEU', 'DNK', 'ESP', 'FIN', 'FRA', 'FRO', 'GBR', 'IRL', 'ITA', 'ISL', 'LIE', 'LUX', 'MCO', 'NLD', 'NOR', 'PRT', 'SWE', 'ZAF', 'KEN','NAM', 'MOZ', 'ZWE', 'SWZ', 'BWA', 'AGO', 'MWI', 'MUS', 'NGA']
			
		},
		USA:{	
			notes: '<h3 style=\"text-align:center;\">Schedule your course today! Find the Authorized Education Center near you!</h3>',			
			countries: ['USA','CAN'],
		},
		LATAM:{	
			notes: '<h3 style=\"text-align:center;\">Unfortunately, classes are not available in your country for the moment.<br />Please contact us in case of any questions.</h3>',			
			countries: ['ARG', 'BHS', 'BRB', 'MEX', 'JAM', 'MSR', 'VCT', 'LCA', 'ANT', 'PRY', 'PAN', 'PER', 'SUR', 'NIC', 'PRI', 'AIA', 'VGB', 'BMU', 'BRA', 'BOL', 'BLZ', 'CHL', 'CYM', 'SLV', 'ABW', 'GRD', 'COL', 
			'CRI', 'FLK', 'DMA', 'ECU', 'GUY', 'DOM', 'HTI', 'GTM', 'HND', 'CUB', 'URY', 'TTO', 'TCA', 'BQ1', 'CUW', 'BQ2', 'BQ3', 'SXM', 'CNT', 'MYT', 'KNA', 'NRU', 'NFK', 'NIU', 'PCN', 'ASM', 'CXR', 'TKL', 'TUV', 'VIR'],
			reduced: true
		},
		APAC:{	
			notes: '<h3 style=\"text-align:center;\">Unfortunately, classes are not available in your country for the moment.<br />Please contact us in case of any questions.</h3>',			
			countries: ['ATG', 'BGD', 'JPN', 'KIR', 'FSM', 'IND', 'NZL', 'NPL', 'SLB', 'NCL', 'KOR', 'MMR', 'MAC', 'WSM', 'PHL', 'PLW', 'SGP', 'LKA', 'PAK', 'THA', 'SYR', 'TWN', 'BRN', 'BTN', 'AFG', 'PNG', 'CCK', 
			'FJI', 'KHM', 'AUS', 'GUM', 'HKG', 'COK', 'CHN', 'MDV', 'HMD', 'TMP', 'IDN', 'MHL', 'MYS', 'WLF', 'VNM', 'TON', 'VUT', 'PRK', 'LAO'],
			reduced: true
		},
		EM:{	
			notes: '<h3 style=\"text-align:center;\">Unfortunately, classes are not available in your country for the moment.<br />Please contact us in case of any questions.</h3>',			
			countries: ['MNE', 'SVK', 'LVA', 'POL', 'SRB', 'SVN', 'ROM', 'ALB', 'BIH', 'EST', 'BGR', 'HUN', 'CZE', 'LTU', 'MKD', 'HRV', 'UNK', 'BHR', 'JOR', 'IRQ', 'IRN', 'LBN', 'KWT', 'PSE', 'SAU', 'QAT', 'ARE', 
			'EGY', 'OMN', 'YEM', 'BLR', 'KGZ', 'MDA', 'KAZ', 'MNG', 'UKR', 'RUS', 'TJK', 'AZE', 'ARM', 'GEO', 'UZB', 'TKM'],
			reduced: true
		},
		
		NoCourses:{
			notes: '<h3 style=\"text-align:center;\">Unfortunately, classes are not available in your country for the moment.<br />Please contact us in case of any questions.</h3>',					
			countries: ['BDI', 'BEN', 'BFA', 'BVT', 'CAF', 'CIV', 'CMR', 'COD', 'COG', 'COM', 'CPV', 'CYP', 'DJI', 'DZA', 'ERI', 'ESH', 'ETH', 'GAB', 'GHA', 'GIB', 'GIN', 'GLP', 'GMB', 'GNB', 'GNQ', 'GRC', 
			'GRL', 'GUF', 'IMY', 'ISR', 'LBR', 'LBY', 'LSO', 'MAR', 'MDG', 'MLI', 'MLT', 'MNP', 'MRT', 'MTQ', 'NER', 'PYF', 'REU', 'RWA', 'SDN', 'SEN', 'SHN', 'SJM', 'SLE', 'SMR', 'SOM', 'SPM', 'STP', 'SYC', 'TCD', 'TGO', 'TUN', 'TUR',
			'TZA', 'UGA', 'VAT', 'ZMB'],
			reduced: true
		},
		
		 
	};
	
	var notes = '';
	var countryValue = $('#country').val();
	var regionResult = 'EMEA'; //Default region, if country not found
	//console.log(regionResult);
	//console.log(countryValue);
		$.each(regions, function(regionName, value){
			$.each(value.countries, function(k, country){
				if(country==countryValue){
					regionResult = regionName;
				}
			});
		});
	
	//console.log(regionResult); //region, if country is true
	currentRegion = regions[regionResult].reduced;
	$('#class-note').html(regions[regionResult].notes);
	$("."+regionResult).css('display', 'block');


};



//resize content block
function adjustMktContentHeight(){
	
	if($('#country').val()!='') {
		$('#mktContent').height(function(i,val){
			var countryheight = $('#country-box').height();
			return mktContentHeight+countryheight;
		});
	}
	if($('#country').val()=='choose') {
		$('#mktContent').height(function(i,val){
			return mktContentHeight;
		});
	};
	if(currentRegion){
		$('#mktContent').height('300px');
		$('#class-note').css('margin-top', '100px');
	}
	
}