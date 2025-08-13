import { Injectable } from '@angular/core';
import { Observable, from, EMPTY } from 'rxjs';
import Swal from 'sweetalert2';
import { MensagemSistema } from '../enum/mensagem-sistema.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  /**
   * Exibe confirmação de exclusão
   * @param titulo Título da confirmação
   * @param texto Texto explicativo
   * @returns Observable<boolean> - true se confirmado
   */
  public confirmarExclusao(
    titulo: string = 'Tem certeza?',
    texto: string = 'Esta ação não pode ser desfeita!'
  ): Observable<boolean> {
    const promise = Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      customClass: {
        popup: 'rounded-lg',
        confirmButton: 'px-6 py-2 rounded-md font-medium',
        cancelButton: 'px-6 py-2 rounded-md font-medium'
      }
    }).then((result) => {
      return result.isConfirmed;
    });

    return from(promise);
  }

  /**
   * Exibe notificação de sucesso
   * @param titulo Título da notificação
   * @param texto Texto explicativo (opcional)
   */
  public sucesso(
    titulo: string,
    texto?: string
  ): Observable<any> {
    const promise = Swal.fire({
      title: titulo,
      text: texto || MensagemSistema.SUCESSO,
      icon: 'success',
      confirmButtonColor: '#10b981',
      confirmButtonText: 'OK',
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'rounded-lg',
        confirmButton: 'px-6 py-2 rounded-md font-medium'
      }
    });

    return from(promise);
  }

  /**
   * Exibe notificação de erro
   * @param titulo Título da notificação
   * @param texto Texto explicativo (opcional)
   */
  public erro(
    titulo: string,
    texto?: string
  ): Observable<any> {
    const promise = Swal.fire({
      title: titulo,
      text: texto,
      icon: 'error',
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'rounded-lg',
        confirmButton: 'px-6 py-2 rounded-md font-medium'
      }
    });

    return from(promise);
  }

  /**
   * Exibe notificação de aviso
   * @param titulo Título da notificação
   * @param texto Texto explicativo (opcional)
   */
  public aviso(
    titulo: string,
    texto?: string
  ): Observable<any> {
    const promise = Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      confirmButtonColor: '#f59e0b',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'rounded-lg',
        confirmButton: 'px-6 py-2 rounded-md font-medium'
      }
    });

    return from(promise);
  }

  /**
   * Exibe notificação de informação
   * @param titulo Título da notificação
   * @param texto Texto explicativo (opcional)
   */
  public info(
    titulo: string,
    texto?: string
  ): Observable<any> {
    const promise = Swal.fire({
      title: titulo,
      text: texto,
      icon: 'info',
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'rounded-lg',
        confirmButton: 'px-6 py-2 rounded-md font-medium'
      }
    });

    return from(promise);
  }

  /**
   * Exibe toast de sucesso (notificação discreta)
   * @param titulo Título do toast
   */
  public toastSucesso(titulo?: string): Observable<void> {
    const promise = Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: titulo || MensagemSistema.SUCESSO,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'rounded-lg'
      }
    });

    return from(promise.then(() => void 0));
  }

  /**
   * Exibe toast de erro (notificação discreta)
   * @param titulo Título do toast
   */
  public toastErro(titulo?: string): Observable<void> {
    const promise = Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: titulo || MensagemSistema.ERRO,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        popup: 'rounded-lg'
      }
    });

    return from(promise.then(() => void 0));
  }

  /**
   * Exibe loading/carregamento
   * @param titulo Título do loading
   * @param texto Texto explicativo (opcional)
   */
  public mostrarCarregamento(
    titulo: string = 'Carregando...',
    texto?: string
  ): Observable<void> {
    const promise = Swal.fire({
      title: titulo,
      text: texto,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      customClass: {
        popup: 'rounded-lg'
      },
      didOpen: () => {
        Swal.showLoading();
      }
    });

    return from(promise.then(() => void 0));
  }

  /**
   * Fecha o loading/carregamento
   */
  public fecharCarregamento(): Observable<void> {
    Swal.close();
    return EMPTY;
  }
}