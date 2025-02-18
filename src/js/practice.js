//요구사항 구현을 위한 전략

// todo 메뉴 추가
// - [] 에스프레소 메뉴에 새로운 메뉴를 확인 버튼으로 추가한다
// - [] 에스프레소 메뉴에 새로운 메뉴를 엔터키 입력으로 추가한다
// - []  추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul>안에 삽입된다.
// - [] 총 메뉴 갯수 count가 상단에 보여진다.
// - [] 메뉴가 추가되면, input은 빈 값으로 초기화한다.
// - [] 인풋값이 빈값이면 추가되지않는다.

const $ = (selector) => document.querySelector(selector);

function App() {
  //form 태그가 자동으로 전송되는 걸 막아줌
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  //메뉴의 이름을 입력받음
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const espressoMenuName = $('#espresso-menu-name').value;
      const MenuItemTemplet = (espressoMenuName) => {
        return `<li class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
          >
            수정
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
          >
            삭제
          </button>
        </li>`;
      };
      $('#espresso-menu-list').insertAdjacentHTML(
        'afterbegin',
        MenuItemTemplet(espressoMenuName),
      );
      console.log(MenuItemTemplet(espressoMenuName));
    }
  });
}

// todo메뉴 수정
// - [] 메뉴의 수정버튼을 누르면 메뉴이름을 "prompt" 인터페이스를 띄워서 수정할 수 있다.

// todo 메뉴 삭제
// - [] 삭제버튼을 누르면 "confirm" 인터페이스를 띄워서 삭제를 확인시키고 삭제한다.
// - [] 총 메뉴 갯수 count가 상단에 보여진다.

App();
