import { Component, OnInit } from '@angular/core';
import { Client } from '../../client.model';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{
  clients: Client[] = [];
  clientsFilter: Client[] = [];
  searchKey: string = '';

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.clientsFilter = clients;
    });
  }

  filterClients() {
    // Filtra los clientes en función de la búsqueda
    // Por ejemplo, asumiendo que clients es un array de objetos con una propiedad 'sharedKey'
    this.clientsFilter = this.clients.filter((client) =>
      client.sharedKey.includes(this.searchKey)
    );
  }

  showAdvancedSearch() {
    // Implementa aquí la lógica para mostrar la búsqueda avanzada
  }
}
