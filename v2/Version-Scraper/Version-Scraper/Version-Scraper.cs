using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Net;

namespace Version_Scraper
{
    public class IbizaVersion
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Version { get; set; }
        public DateTime timeStamp { get; set; }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }

    private async Task CreateIbizaVersionDocumentIfNotExists(string databaseName, string collectionName, IbizaVersion ibizaVersion)
    {
        const string EndpointUrl = @"https://uxversions-v2.documents.azure.com:443/";
        const string PrimaryKey = @"8KZwAVgG0urGAlQ6eeN2sxnFFDQvCmymmSih1AX1q10PDbkv6JkDuUME4fV0QDFXTXnMtJgOKbF7oKvgcKuNrg==";
        DocumentClient client = new DocumentClient(new Uri(EndpointUrl), PrimaryKey);
        try
        {
            await client.ReadDocumentAsync(UriFactory.CreateDocumentUri(databaseName, collectionName, ibizaVersion.Id));
        }
        catch (DocumentClientException de)
        {
            if (de.StatusCode == HttpStatusCode.NotFound)
            {
                await client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(databaseName, collectionName), ibizaVersion);
            }
            else
            {
                throw;
            }
        }
    }

    public static class Version_Scraper
    {
        [FunctionName("IbizaScraper")]
        public static void Run([TimerTrigger("0 */3 * * * *")]TimerInfo myTimer, ILogger log)
        {
           
        }
    }
}