# froggagul.github.io

Making blog..🏗️

## 주안점
*한번 블로그를 만들었다 터져본 경험이 있기에, 이번에는 좀더 신중히 아키텍쳐를 구성하려 한다.*
1. 성능 (lazy loading + 랜딩 페이지)
  - post 수가 많아지면 랜딩 페이지의 로딩 속도가 느려지는 현상이 발생.
2. typescript
  - 개발시 오류 방지
  - ts 없이는 살 수 없는 몸이 되어버렸기 때문에,, 
  - 아키텍쳐 측면에서 type 선언등을 고려하며 개발할 계획
3. markdown으로 기록하기
  - 지난 버전의 블로그와 같지만, 이번에는 미리 가이드라인을 만들어서 제작하려 한다.
  ```
  title: string
  date: YYYYMMDD
  body: string
  ```
  - series: posts 폴더의 자손 폴더들의 이름으로 구분
  
4. 시리즈 및 태그 추가하기
  - 시리즈 단위로 글을 쓸 것이기 때문에 시리즈별로 글을 볼 수 있는 기능을 추가하려고 한다.

## todolist
1. ~~반응형 layout~~ `feature-layout`
2. darkmode
3. ~~검색 기준~~
  * title, series 기준으로 검색
4. ~~SEO~~
5. ~~Google Analytics~~
6. ~~RSS, sitemap~~
7. series 기준으로 prev next 제공
  * 
8. 댓글 기능
9. ~~google ads~~
  * deprecated: no google ads on private blogs!
10. footer design